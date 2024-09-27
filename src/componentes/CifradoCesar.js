import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

const CifradoCesar = () => {
  const [message, setMessage] = useState("");
  const [shift, setShift] = useState(0);
  const [cipheredMessage, setCipheredMessage] = useState("");
  const [error, setError] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const handleCipher = () => {
    if (!message || isNaN(shift)) {
      setError("Por favor, ingrese un mensaje y una clave válida.");
      return;
    }
    setError("");
    let result = "";
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (char.match(/[a-z]/i)) {
        let code = message.charCodeAt(i);
        // Letras mayúsculas
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + parseInt(shift)) % 26) + 65);
        }
        // Letras minúsculas
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + parseInt(shift)) % 26) + 97);
        }
      }
      result += char;
    }
    setCipheredMessage(result);
  };

  const handleDecipher = () => {
    let decipherShift = -shift;
    let result = "";
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (char.match(/[a-z]/i)) {
        let code = message.charCodeAt(i);
        // Letras mayúsculas
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + parseInt(decipherShift)) % 26 + 26) % 26 + 65);
        } 
        // Letras minúsculas
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + parseInt(decipherShift)) % 26 + 26) % 26 + 97);
        }
      }
      result += char;
    }
    setCipheredMessage(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cipheredMessage)
      .then(() => {
        setCopySuccess("Texto copiado");
        setTimeout(() => setCopySuccess(""), 3000); // Ocultar el mensaje después de 3 segundos
      })
      .catch(() => setCopySuccess("No se pudo copiar el texto"));
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Cifrado César</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group>
              <Form.Label>Mensaje:</Form.Label>
              <Form.Control 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Ingrese su mensaje aquí" 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Clave de desplazamiento:</Form.Label>
              <Form.Control 
                type="number" 
                value={shift} 
                onChange={(e) => setShift(e.target.value)} 
                placeholder="Ingrese el desplazamiento" 
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="d-flex justify-content-between">
              <Button variant="primary" onClick={handleCipher}>Cifrar</Button>
              <Button variant="secondary" onClick={handleDecipher}>Descifrar</Button>
            </div>
          </Form>
          {cipheredMessage && (
            <div className="mt-3">
              <h4>Resultado:</h4>
              <p>{cipheredMessage}</p>
              <Button variant="info" onClick={handleCopy}>Copiar Texto</Button>
              {copySuccess && <Alert variant="success" className="mt-2">{copySuccess}</Alert>}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CifradoCesar;

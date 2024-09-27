import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

const CifradoEscitala = () => {
  const [message, setMessage] = useState("");
  const [columns, setColumns] = useState(0);
  const [cipheredMessage, setCipheredMessage] = useState("");
  const [error, setError] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const handleCipher = () => {
    const numColumns = parseInt(columns, 10);
    if (!message || isNaN(numColumns) || numColumns <= 0) {
      setError("Por favor, ingrese un mensaje y una clave válida.");
      return;
    }
    setError("");
    let result = "";
    const rows = Math.ceil(message.length / numColumns);
    for (let i = 0; i < numColumns; i++) {
      for (let j = 0; j < rows; j++) {
        const index = j * numColumns + i;
        if (index < message.length) {
          result += message[index];
        }
      }
    }
    setCipheredMessage(result);
  };

  const handleDecipher = () => {
    const numColumns = parseInt(columns, 10);
    if (numColumns <= 0 || isNaN(numColumns) || message.length === 0) {
      setError("Por favor, ingrese un mensaje y una clave válida.");
      return;
    }
    setError("");

    const rows = Math.ceil(message.length / numColumns);
    let result = Array(message.length).fill("");
    let currentIndex = 0;

    for (let i = 0; i < numColumns; i++) {
      for (let j = 0; j < rows; j++) {
        const index = j * numColumns + i;
        if (index < message.length) {
          result[index] = message[currentIndex++];
        }
      }
    }

    setCipheredMessage(result.join(""));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cipheredMessage)
      .then(() => {
        setCopySuccess("Texto copiado");
        setTimeout(() => setCopySuccess(""), 3000);
      })
      .catch(() => setCopySuccess("No se pudo copiar el texto"));
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Cifrado Escítala</h2>
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
              <Form.Label>Número de columnas (clave):</Form.Label>
              <Form.Control 
                type="number" 
                value={columns} 
                onChange={(e) => setColumns(e.target.value)} 
                placeholder="Ingrese el número de columnas" 
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

export default CifradoEscitala;

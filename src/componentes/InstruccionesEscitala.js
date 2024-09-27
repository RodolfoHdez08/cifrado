import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap

const InstruccionesEscitala = () => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h3" className="bg-primary text-white text-center">
          Instrucciones de Cifrado Escítala
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Aprende cómo utilizar el cifrado Escítala para proteger tus mensajes.
          </Card.Text>
          <Card.Title>Ejemplo</Card.Title>
          <Card.Text>
            <strong>Texto claro:</strong> <code>ejemplodelmetododelescitalo</code><br />
            <strong>Numero de columnas:</strong> <code>9</code><br />
            <strong>Texto cifrado:</strong> <code>ELLJMEEESMTCPOILDTOOADDLEEO</code>
          </Card.Text>
          <Card.Title>Paso a Paso</Card.Title>
          <ListGroup as="ol" numbered className="mb-4">
            <ListGroup.Item>Se dibuja una cuadrícula rectangular.</ListGroup.Item>
            <ListGroup.Item>Escribe el texto en horizontal, comenzando desde la izquierda.</ListGroup.Item>
            <ListGroup.Item>Lee el texto verticalmente para obtener el mensaje cifrado.</ListGroup.Item>
            <ListGroup.Item>El cifrado depende de las dimensiones de la cuadrícula.</ListGroup.Item>
          </ListGroup>
          <Card.Text>
            <strong>Nota:</strong> Este cifrado es de tipo transposición, es decir, las letras no se modifican, solo se reorganizan siguiendo un patrón específico.
          </Card.Text>
          <Card.Title>Criptoanálisis</Card.Title>
          <Card.Text>
            El análisis de este cifrado es sencillo. Puedes probar diferentes cantidades de líneas para descubrir el patrón de transposición y descifrar el mensaje.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Title>Recomendaciones:</Card.Title>
          <ul>
            <li>Ingresa un mensaje y una clave para aplicar el cifrado.</li>
            <li>Puedes alternar entre cifrar y descifrar el mensaje.</li>
            <li>Utiliza la clave correcta para descifrar el mensaje.</li>
          </ul>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default InstruccionesEscitala;

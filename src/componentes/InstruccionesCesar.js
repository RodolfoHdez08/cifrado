import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

const InstructionsCifradoCesar = () => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h3" className="bg-primary text-white text-center">
          Instrucciones para el Cifrado César
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Sigue estas instrucciones para utilizar correctamente el cifrado César.
          </Card.Text>

          {/* Ejemplo del Cifrado César */}
          <Card.Title>Ejemplo del Cifrado César</Card.Title>
          <Card.Text>
            <strong>Texto claro:</strong> <code>hola</code><br />
            <strong>Clave:</strong> 3<br />
            <strong>Texto cifrado:</strong> <code>krod</code>
          </Card.Text>

          {/* Instrucciones paso a paso */}
          <Card.Title>Instrucciones paso a paso</Card.Title>
          <ListGroup as="ol" numbered>
            <ListGroup.Item>Ingresa un mensaje y una clave numérica para aplicar el cifrado.</ListGroup.Item>
            <ListGroup.Item>Puedes alternar entre cifrar y descifrar el mensaje con las opciones disponibles.</ListGroup.Item>
            <ListGroup.Item>Utiliza la clave correcta para descifrar el mensaje.</ListGroup.Item>
          </ListGroup>

          {/* Notas adicionales */}
          <Card.Text className="mt-4">
            <strong>Nota importante:</strong> Para descifrar el mensaje, asegúrate de usar la misma clave que utilizaste para cifrarlo.
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Card.Title>Recomendaciones adicionales:</Card.Title>
          <ul>
            <li>Asegúrate de que el mensaje no contenga espacios ni caracteres especiales.</li>
            <li>Prueba con diferentes claves para ver cómo cambia el mensaje cifrado.</li>
          </ul>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default InstructionsCifradoCesar;

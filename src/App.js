import React, { useState } from "react";
import CifradoCesar from "./componentes/CifradoCesar";  // Componente para el Cifrado César
import CifradoEscitala from "./componentes/CifradoEscitala";  // Componente para el Cifrado Escítala
import InstruccionesCesar from "./componentes/InstruccionesCesar";  // Componente para las instrucciones de César
import InstruccionesEscitala from "./componentes/InstruccionesEscitala";  // Componente para las instrucciones de Escítala
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa los estilos de Bootstrap

function App() {
  const [showCaesar, setShowCaesar] = useState(true);  // Estado para alternar entre Cifrado César y Escítala

  return (
    <Container className="mt-5">
      {/* Título Principal */}
      <h1 className="text-center">Cifrado César y Escítala</h1>
      
      {/* Botones de Navegación entre los dos métodos de cifrado */}
      <Row className="my-4">
        <Col className="text-center">
          <Button 
            variant={showCaesar ? "primary" : "outline-primary"}  // Botón destacado si está seleccionado César
            onClick={() => setShowCaesar(true)} 
            className="mr-3"
          >
            Cifrado César
          </Button>
          <Button 
            variant={!showCaesar ? "primary" : "outline-secondary"}  // Botón destacado si está seleccionado Escítala
            onClick={() => setShowCaesar(false)}
          >
            Cifrado Escítala
          </Button>
        </Col>
      </Row>

      {/* Mostrar el componente según la opción seleccionada */}
      <Row className="mb-5">
        <Col>
          {showCaesar ? <CifradoCesar /> : <CifradoEscitala />}  {/* Renderiza César o Escítala */}
        </Col>
      </Row>
      
      {/* Mostrar las instrucciones según la opción seleccionada */}
      <Row>
        <Col>
          {showCaesar ? <InstruccionesCesar /> : <InstruccionesEscitala />}  {/* Renderiza las instrucciones según la opción */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

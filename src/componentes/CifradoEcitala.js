import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const CifradoEscitala = () => {
  const [mensaje, setMensaje] = useState('');
  const [clave, setClave] = useState('');
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');
  const [mostrarGuia, setMostrarGuia] = useState(false);
  const navigate = useNavigate(); // Usa el hook de navegación

  // Función para cifrar con Escítala
  const cifrar = (mensaje, columnas) => {
    let mensajeCifrado = '';
    const filas = Math.ceil(mensaje.length / columnas);

    for (let col = 0; col < columnas; col++) {
      for (let fila = 0; fila < filas; fila++) {
        const indice = fila * columnas + col;
        if (indice < mensaje.length) {
          mensajeCifrado += mensaje[indice];
        }
      }
    }
    return mensajeCifrado;
  };

  // Función para descifrar con Escítala
  const descifrar = (mensaje, columnas) => {
    const filas = Math.ceil(mensaje.length / columnas);
    let mensajeDescifrado = Array(mensaje.length).fill('');
    let indice = 0;

    for (let col = 0; col < columnas; col++) {
      for (let fila = 0; fila < filas; fila++) {
        if (indice < mensaje.length) {
          const idx = fila * columnas + col;
          mensajeDescifrado[idx] = mensaje[indice];
          indice++;
        }
      }
    }
    return mensajeDescifrado.join('');
  };

  const handleCifrar = () => {
    const columnas = parseInt(clave, 10);
    if (isNaN(columnas) || columnas <= 0) {
      setError('Por favor, ingresa una clave válida (número de columnas).');
      return;
    }
    setError('');
    const mensajeCifrado = cifrar(mensaje.replace(/\s/g, ''), columnas);
    setResultado(mensajeCifrado);
  };

  const handleDescifrar = () => {
    const columnas = parseInt(clave, 10);
    if (isNaN(columnas) || columnas <= 0) {
      setError('Por favor, ingresa una clave válida (número de columnas).');
      return;
    }
    setError('');
    const mensajeDescifrado = descifrar(mensaje.replace(/\s/g, ''), columnas);
    setResultado(mensajeDescifrado);
  };

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(resultado)
      .then(() => alert('Texto copiado al portapapeles!'))
      .catch(err => console.error('Error al copiar: ', err));
  };

  const verMas = () => {
    navigate('/documentacion'); // Navega a la documentación
  };

  // Estilos mejorados para el diseño responsivo
  const estilos = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '900px',
      margin: 'auto',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
      flexWrap: 'wrap', // Permite que los elementos se envuelvan en pantallas pequeñas
    },
    formulario: {
      flex: '1 1 300px', // Flex-grow, flex-shrink, and base width
      marginRight: '20px',
      minWidth: '250px', // Min width to prevent too small
    },
    title: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    guiaContainer: {
      flex: '1 1 300px', // Flex-grow, flex-shrink, and base width
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      marginLeft: '20px',
      minWidth: '250px', // Min width for the guide
    },
    guiaTitulo: {
      color: '#007bff',
      fontSize: '20px',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    guiaTexto: {
      color: '#333',
      fontSize: '16px',
      lineHeight: '1.6',
      marginBottom: '10px',
    },
    guiaLista: {
      margin: '10px 0',
      paddingLeft: '20px',
      color: '#555',
    },
    guiaEjemplo: {
      backgroundColor: '#f0f8ff',
      borderRadius: '5px',
      padding: '10px',
      border: '1px solid #007bff',
      color: '#333',
    },
    textarea: {
      width: '100%',
      height: '100px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '16px',
      transition: 'border 0.3s',
    },
    input: {
      width: '100%',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '16px',
      transition: 'border 0.3s',
    },
    button: {
      width: '48%',
      margin: '1%',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      margin: '10px 0',
    },
    resultado: {
      margin: '20px 0',
      padding: '10px',
      backgroundColor: '#e9ecef',
      borderRadius: '5px',
    },
    verMasButton: {
      marginTop: '20px',
      cursor: 'pointer',
      color: '#007bff',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={estilos.container}>
      {/* Formulario principal */}
      <div style={estilos.formulario}>
        <h1 style={estilos.title}>Cifrado Escítala</h1>
        <textarea
          placeholder="Ingresa tu mensaje"
          style={estilos.textarea}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <input
          type="number"
          placeholder="Clave (número de columnas)"
          style={estilos.input}
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />
        <div>
          <button
            style={estilos.button}
            onClick={handleCifrar}
          >
            Cifrar
          </button>
          <button
            style={estilos.button}
            onClick={handleDescifrar}
          >
            Descifrar
          </button>
        </div>
        {error && <p style={estilos.error}>{error}</p>}
        <h2>Resultado:</h2>
        <p style={estilos.resultado}>{resultado}</p>
        {resultado && (
          <button
            style={estilos.button}
            onClick={copiarAlPortapapeles}
          >
            Copiar Texto
          </button>
        )}

      </div>

      {/* Panel de ayuda al lado */}
      <div style={estilos.guiaContainer}>
        <h2 style={estilos.guiaTitulo}>Guía rápida para el Cifrado Escítala:</h2>
        <p style={estilos.guiaTexto}>
          El cifrado Escítala es un método antiguo donde el mensaje se organiza en columnas.
        </p>
        <p style={estilos.guiaTexto}><strong>Pasos:</strong></p>
        <ul style={estilos.guiaLista}>
          <li>Ingresa el mensaje a cifrar o descifrar.</li>
          <li>Introduce la clave que representa el número de columnas.</li>
          <li>Presiona "Cifrar" o "Descifrar".</li>
          <li>Puedes copiar el resultado con el botón "Copiar Texto".</li>
        </ul>
        <p style={estilos.guiaEjemplo}>
          Ejemplo: Para un mensaje de "HOLA" con 2 columnas, el resultado será "HOAL".
        </p>
        <div
          style={estilos.verMasButton}
          onClick={verMas}
        >
          Ver más
        </div>
      </div>
    </div>
  );
};

export default CifradoEscitala;

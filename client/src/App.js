import './App.css';
import { useState } from 'react';

function App() {

  const [codigo, setCodigo] = useState(0); 
  const [nombre, setNombre] = useState(""); 
  const [apellido, setApellido] = useState(""); 
  const [celular, setCelular] = useState(0); 
  const [direccion, setDireccion] = useState(""); 

  const mostratDatos = ()=>{
    alert(nombre)
  }

  return (
    <div className="App">
      <div className="datos">
        <label>Codigo: <input
        onChange={(event)=>{
          setCodigo(event.target.value);
        }} 
        type="number"></input></label><br/>
        <label>Nombre: <input 
        onChange={(event)=>{
          setNombre(event.target.value);
        }} 
        type="text"></input></label><br/>
        <label>Apellido: <input
        onChange={(event)=>{
          setApellido(event.target.value);
        }} 
        type="text"></input></label><br/>
        <label>Celular: <input
        onChange={(event)=>{
          setCelular(event.target.value);
        }} 
        type="number"></input></label><br/>
        <label>Dirección: <input
        onChange={(event)=>{
          setDireccion(event.target.value);
        }} 
        type="text"></input></label><br/>
        <button onClick={mostratDatos}>Registrar</button>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Axios from "axios";


function App() {

  const [codigo, setCodigo] = useState(0); 
  const [nombre, setNombre] = useState(""); 
  const [apellido, setApellido] = useState(""); 
  const [celular, setCelular] = useState(0); 
  const [direccion, setDireccion] = useState(""); 


  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      codigo:codigo,
      nombre:nombre,
      apellido: apellido,
      celular:celular,
      direccion:direccion
    }).then(()=>{
      alert("Empleado registrado");
    });
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
        <button onClick={add}>Registrar</button>
      </div>
    </div>
  );
}

export default App;

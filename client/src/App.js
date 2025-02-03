import './App.css';
import { useState } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [codigo, setCodigo] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState(0);
  const [direccion, setDireccion] = useState("");



  const [editar, setEditar] = useState(false);


  const [empleadoslist, setEmpleados] = useState([]);


  const add = () => {
    Axios.post("http://localhost:3001/create", {
      codigo: codigo,
      nombre: nombre,
      apellido: apellido,
      celular: celular,
      direccion: direccion
    }).then(() => {
      alert("Empleado registrado");
    });
  }

  const update = () => {
    Axios.put("http://localhost:3001/update", {
      codigo: codigo,
      nombre: nombre,
      apellido: apellido,
      celular: celular,
      direccion: direccion
    }).then(() => {
      getEmpleados();
      alert("Empleado actualizado");
    });
  }

  const editarEmpleado = (val) => {
    setEditar(true)

    setCodigo(val.cod);
    setNombre(val.nombre);
    setApellido(val.apellido);
    setCelular(val.celular);
    setDireccion(val.direccion);
  }


  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados").then((response) => {
      setEmpleados(response.data);
    });
  }
  getEmpleados();

  return (
    <div className='container'>
      <div className="App">
        <div className="datos">
          <label>Codigo: <input
            onChange={(event) => {
              setCodigo(event.target.value);
            }}
            type="number" value={codigo} ></input></label><br />
          <label>Nombre: <input
            onChange={(event) => {
              setNombre(event.target.value);
            }}
            type="text" value={nombre}></input></label><br />
          <label>Apellido: <input
            onChange={(event) => {
              setApellido(event.target.value);
            }}
            type="text" value={apellido}></input></label><br />
          <label>Celular: <input
            onChange={(event) => {
              setCelular(event.target.value);
            }}
            type="number" value={celular}></input></label><br />
          <label>Dirección: <input
            onChange={(event) => {
              setDireccion(event.target.value);
            }}
            type="text" value={direccion}></input></label><br />
            {
              editar?
              <div>
              <button className='btn btn-warning m-2' onClick={update}>Actualiar</button>
              <button className='btn btn-danger m-2'  onClick={add}>Cancelar</button>
              </div>
              :<button className='btn btn-success' onClick={add}>Registrar</button>
            }
          
        </div>

      </div>
      <button className='btn btn-success' onClick={getEmpleados}>Consultar</button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope='col'>Codigo</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            <th scope='col'>Celular</th>
            <th scope='col'>Direccion</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {
            empleadoslist.map((val, key) => {
              return <tr key={val.cod}>
                <th>{val.cod}</th>
                <th>{val.nombre}</th>
                <th>{val.apellido}</th>
                <th>{val.celular}</th>
                <th>{val.direccion}</th>
                <th>
                  <div className='btn-group' role='group' aria-label='Basic example'> 
                  <button type='button' className='btn btn-info' onClick={() => {
                    editarEmpleado(val)
                  }}>Editar</button>
                  <button type='button' className='btn btn-danger'>eliminar</button>
                  </div>
                  
                </th>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;

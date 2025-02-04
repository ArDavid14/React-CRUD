const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
//npm install cors 
//npm install mysql express

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "VENTAS_AAA"
})

app.post("/create", (req, res) => {
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const celular = req.body.celular;
    const direccion = req.body.direccion;


    db.query("INSERT INTO EMPLEADO (cod,nombre,apellido,celular,direccion) VALUES(?,?,?,?,?)", [codigo, nombre, apellido, celular, direccion],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Empleado registrado con exito :)")
            }
        }

    );
});

app.get("/empleados", (req, res) => {
    db.query("SELECT * FROM EMPLEADO",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }

    );
});

app.put("/update", (req, res) => {
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const celular = req.body.celular;
    const direccion = req.body.direccion;

    db.query("UPDATE EMPLEADO SET nombre=?,apellido=?,celular=?,direccion=? WHERE cod=?", [nombre, apellido, celular, direccion, codigo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Empleado actualizado con exito")
            }
        }

    );
});

app.delete("/delete/:codigo", (req, res) => {
    const cod = req.params.cod;
    console.log(cod);

    db.query("DELETE FROM empleado WHERE cod=?", cod,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }

    );
});


app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
})

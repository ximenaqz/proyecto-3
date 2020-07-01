import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Contenido() {
  return (
    <>
      <Route path="/ticket">
        <Tickets />
      </Route>
      <Route path="/compra">
        <Compra />
      </Route>
    </>
  );
}
function Tickets() {
  //datos de tickets
  let [ticket, setTicket] = useState([]);
  // let [package , setPackages] = useState([]);
  useEffect(function () {
    fetch("http://localhost:3000/tickets")
      .then(function (resultado) {
        return resultado.json();
      })
      .then(function (info) {
        console.log(info);
        setTicket(info);
      });

    //  fetch("http://localhost:3000/packages").then(function(resultado) {
    //   return resultado.json();
    // }).then(function (packs) {
    //   setPackages(packs);
    //   console.log(packs);
  }, []);

  //coger numero de entradas

  let ticketJSX = ticket.map(function (resultado) {
    return (
      <>
        <h1>{resultado.type}</h1>
        <h2>{resultado.name}</h2>
        <p>{resultado.price}</p>
        <p>{resultado.cantidad}</p>
        <button>Cantidad</button>
        <button type="button" onClick={handleClick}>
          Comprar
        </button>
      </>
    );
  });

  //datos de packages

  // let packageJSX = package.map(function (paquetes) {
  //   return (
  //     <>
  //     <h1>{paquetes.type}</h1>
  //     </>
  //   )

  // })

  let history = useHistory();

  function handleClick() {
    history.push("/compra");
  }

  return (
    <>
      {ticketJSX}

      {/* {packageJSX} */}
    </>
  );
}

function Compra() {
  let [nombre, setNombre] = useState("");
  let [apellido, setApellido] = useState("");
  let [email, setEmail] = useState("");
  let [fecha, setFecha] = useState("");
  let [genero, setGenero] = useState("");
  let [telefono, setTelefono] = useState("");
  let [tarjeta, setTarjeta] = useState("");
  let [postal, setPostal] = useState("");
  let [ciudad, setCiudad] = useState("");
  let [direccion, setDireccion] = useState("");

  useEffect(function () {
    fetch("http://localhost:3000/registro");
  }, []);

  function nombrePersona(event) {
    setNombre(event.target.value);
  }
  function apellidoPersona(event) {
    setApellido(event.target.value);
  }
  function emailPersona(event) {
    setEmail(event.target.value);
  }
  function fechaPersona(event) {
    setFecha(event.target.value);
  }
  function generoPersona(event) {
    setGenero(event.target.value);
  }
  function telefonoPersona(event) {
    setTelefono(event.target.value);
  }
  function tarjetaPersona(event) {
    setTarjeta(event.target.value);
  }
  function postalPersona(event) {
    setPostal(event.target.value);
  }
  function ciudadPersona(event) {
    setCiudad(event.target.value);
  }
  function direccionPersona(event) {
    setDireccion(event.target.value);
  }

  function enviarDatos() {
    let objetoDatos = {
      nombre,
      apellido,
      email,
      fecha,
      genero,
      telefono,
      tarjeta,
      postal,
      ciudad,
      direccion,
    };
    console.log(objetoDatos);

    fetch("http://localhost:3000/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(objetoDatos),
    })
      .then(function (resultado) {
        console.log(resultado);
        return resultado.json();
      })
      .then(function (datos) {
        console.log(datos);
        Swal.fire({
          title: "Gracias por tu compra",
          text: "You clicked the button!",
          icon: "success",
          button: "Aww yiss!",
        });
      });
  }
  return (
    <>
      <h1>DATOS PERSONALES</h1>
      <input onChange={nombrePersona} placeholder="Nombre" />
      <input onChange={apellidoPersona} placeholder="apellido" />
      <input onChange={emailPersona} placeholder="E-mail" />
      <input
        onChange={fechaPersona}
        placeholder="Fecha Nacimiento (DD-MM-AA)"
      />
      <select onChange={generoPersona}>
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>
      </select>

      <input onChange={telefonoPersona} placeholder="Telefono" />
      <h1>PAGO</h1>
      <select onChange={tarjetaPersona}>
        <option value="Ideal">Ideal</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
      </select>
      <input onChange={postalPersona} placeholder="Postal" />
      <input onChange={ciudadPersona} placeholder="Ciudad" />
      <input onChange={direccionPersona} placeholder="Calle y portal" />

      <button onClick={enviarDatos}>Pago</button>
    </>
  );
}
export default Contenido;

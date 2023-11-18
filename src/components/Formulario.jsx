"use client";

import { useContext } from "react";
import { ContextMap } from "@/context/UserContext";


const Formulario = () => {
  const Context = useContext(ContextMap);

  const {  location, setLocation,data, setData } = Context;


const obtenerUbicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert("Tu navegador no soporta geolocalización");
    }
  };



  return (
    <div className="form-container">
      <h1>Formulario</h1>
      <button
        className="button-form secondary-button"
        onClick={obtenerUbicacion}
      >
        ¿Dónde estoy?
      </button>
      {location && (
        <div>
          <p>LATITUDE: {location.lat}</p>
          <p>LONGITUDE: {location.lng}</p>
        </div>
      )}
      <div className="form">
        <label className="label">Especie</label>
        <input
          className="input"
          type="text"
          value={data.especie}
          onChange={(e) => setData({ ...data, especie: e.target.value })}
        />
        <label className="label">Municipio</label>
        <select
          className="input"
          value={data.municipio}
          onChange={(e) => setData({ ...data, municipio: e.target.value })}
        >
          <option value="">Seleccione</option>
          <option value="Barrancas">Barrancas</option>
          <option value="Hatonuevo">Hatonuevo</option>
          <option value="Albania">Albania</option>
          <option value="Fonseca">Fonseca</option>
        </select>
        <label className="label">Ciudadano</label>
        <input
          className="input"
          type="text"
          value={data.ciudadano}
          onChange={(e) => setData({ ...data, ciudadano: e.target.value })}
        />
        <button className="primary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Formulario;

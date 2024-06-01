import "./App.css";
import "./component/input.css";
import Input from "./component/Input";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataObject = {
      ...formData,
    };
    const jsonData = JSON.stringify(formDataObject, null, 2);
    console.log(jsonData);
  };

  const handleChange = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Registro de usuario nuevo</h1>
        <form action="#" onSubmit={handleSubmit}>
          <div className="content">
            <div className="fila1">
              <Input
                name="Nombre"
                type="text"
                onChange={(e) => handleChange(e, "Nombre")}
              />
              <Input
                name="Fecha_nacimiento"
                type="date"
                onChange={(e) => handleChange(e, "Fecha_nacimiento")}
              />
              <Input
                name="Usarme"
                type="text"
                onChange={(e) => handleChange(e, "Usarme")}
              />
            </div>
            <div className="fila2">
              <Input
                name="Apellido"
                type="text"
                onChange={(e) => handleChange(e, "Apellido")}
              />
              <Input
                name="Email"
                type="email"
                onChange={(e) => handleChange(e, "Email")}
              />
              <Input
                name="URL"
                type="text"
                onChange={(e) => handleChange(e, "URL")}
              />
            </div>
            <div className="input">
              <label htmlFor="#">Sobre ti</label>
              <textarea className="bar campo" name="sobre" id="#"></textarea>
            </div>
          </div>
          <div className="btn">
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;

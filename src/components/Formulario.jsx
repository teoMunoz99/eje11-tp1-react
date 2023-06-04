import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ListaNoticias from "./ListaNoticias";
import { useState, useEffect } from "react";

const Formulario = () => {
  const [noticia, setNoticia] = useState([]);
  const [categoria, setCategoria] = useState('');
  //guardo el valor del select
  const handleChange = (event) => {
    setCategoria(event.target.value);
  };


  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    //realizo la peticion get a la api de noticias
    try {
      const respuesta = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
      const datos = await respuesta.json();
      setNoticia(datos.articles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="p-4">
      <section>
        <h3 className="text-center mb-3">Buscar por categoría</h3>
        <Form.Select aria-label="Default select example" id='inputSelect' value={categoria} onChange={handleChange}>
          <option value="">Abrir el menu</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </Form.Select>
        <p className="text-center mt-2">Categoría seleccionada: {categoria}</p>
      </section>
      <ListaNoticias noticia={noticia} categoria={categoria}></ListaNoticias>
    </Container>
  );
};

export default Formulario;

import React from "react";
import Card from "react-bootstrap/Card";

const Noticia = ({noticia}) => {
  return (
    <Card style={{ width: "18rem" }} className="m-4">
      <Card.Img variant="top" src={noticia.urlToImage} alt={noticia.urlToImage} />
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text>
          {noticia.content}
        </Card.Text>
        <a className="btn btn-primary" href={noticia.url} target="_blank">Ver más</a>
      </Card.Body>
    </Card>
  );
};

export default Noticia;

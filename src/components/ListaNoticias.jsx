import React from "react";
import Noticia from "./Noticia";

const ListaNoticias = ({noticia, categoria}) => {
  return (
  //Seccion donde se mostraran las cards con noticias
    <div className="d-flex justify-content-center flex-wrap">
      {
        noticia.map((noticia, index) => (
          <Noticia key={index} noticia={noticia}></Noticia>
        ))
      }
    </div>
  );
};

export default ListaNoticias;

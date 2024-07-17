import "./Card.css";
import { AiOutlineFire, AiFillFire } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useState } from "react";
import React from "react";
import EditCard from "../EditCard/EditCard"; // Import EditCard component


const Card = (props) => {
  const { nombre, descripcion, imagen, video, categoria, id, fav } = props.datos;
  const { colorPrimario, eliminarCard, like, onSelectVideo } = props;
  const [showEditModal, setShowEditModal] = useState(false);

  const handleSelectVideo = () => {
    onSelectVideo(props.datos);
  };
  const handleEliminar = () => {
    eliminarCard(id);
  };
  const handleEdit = () => {
    setShowEditModal(true);
  };

  const cardStyle = {
    backgroundColor: colorPrimario,
    border: `5px solid ${colorPrimario}`,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="encabezado" style={{ backgroundColor: colorPrimario }} onClick={handleSelectVideo}>
        <img src={imagen} alt={nombre} />
      </div>

      {/*  
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{descripcion}</h5>
      </div>
*/}
      <div className="buttonsCard">
        {fav ? (
          <AiFillFire color="#FF8800" size="3rem" onClick={() => like(id)} />
        ) : (
          <AiOutlineFire color="#FF8800" size="3rem" onClick={() => like(id)} />
        )}

        <div className="eliminar-container">
          <MdOutlineDeleteForever
            className="eliminar-icon"
            size="3rem"
            color="white"
            onClick={handleEliminar}
          />

          <span className="eliminar-texto" onClick={handleEliminar}>
            BORRAR
          </span>
        </div>

        <button className="edit-button" onClick={handleEdit}>
          EDITAR
        </button>

        {showEditModal && (
          <EditCard
            onClose={() => setShowEditModal(false)}
            initialData={props.datos}
            // Pass any functions or props needed for editing
          />
        )}
      </div>
    </div>
  );
};

export default Card;
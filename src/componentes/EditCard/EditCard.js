import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import dataCategoriesColors from '../../data/DataCategoriesColors';
import videosData from '../../data/videosData';
import "./EditCard.css";

const EditCard = ({ onClose, initialData }) => {
  const [categoria, setCategoria] = useState(initialData.categoria);
  const [nombre, setNombre] = useState(initialData.nombre);
  const [imagen, setImagen] = useState(initialData.imagen);
  const [video, setVideo] = useState(initialData.video);
  const [descripcion, setDescripcion] = useState(initialData.descripcion);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!nombre) {
      newErrors.nombre = 'Este campo es obligatorio';
    }

    if (!imagen) {
      newErrors.imagen = 'Este campo es obligatorio';
    }

    if (!video) {
      newErrors.video = 'Este campo es obligatorio';
    }

    if (!categoria) {
      newErrors.categoria = '*';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newCard = {
      id: initialData.id, // Mantenemos el mismo id para reemplazar la tarjeta existente
      categoria,
      nombre,
      imagen: `${process.env.PUBLIC_URL}${imagen}`,
      video: `${process.env.PUBLIC_URL}${video}`,
      descripcion,
      fav: initialData.fav || false,
    };

    // Buscar el índice de la tarjeta existente
    const index = videosData.findIndex(card => card.id === initialData.id);

    if (index !== -1) {
      // Reemplazar la tarjeta existente
      videosData[index] = newCard;
    } else {
      console.log(`Card with id ${initialData.id} not found.`);
    }

    navigate('/');

    onClose();
  };

  const handleReset = () => {
    setNombre('');
    setImagen('');
    setVideo('');
    setDescripcion('');
    setCategoria('');
    setErrors({});
  };

  return (
    <div className="edit-card-modal">
      <div className="edit-card-overlay" onClick={onClose} />
      <div className="edit-card-content">
        <div className="new-video-header">
          <h2>EDITAR CARD</h2>

        </div>
        <div className="new-video-form">
     
          <form onSubmit={handleSubmit}>
            <div className="form-row-edit-card">
              <label htmlFor="titulo">Título:</label>
              <input
                type="text"
                id="titulo"
                
                onChange={(event) => setNombre(event.target.value)}
                placeholder={errors.nombre ? 'Este campo es obligatorio' : nombre }
                className={errors.nombre ? 'error' : ''}
              />
            </div>
            <div className="form-row-edit-card">
              <label htmlFor="categoria">Categoria:</label>
              <select
                id="categoria"
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
                className={errors.categoria ? 'error' : ''}
                style={errors.categoria ? { color: 'red' } : {}}
              >
                <option value="">Seleccione una categoria</option>
                {dataCategoriesColors.map((categoria) => (
                  <option key={categoria.id} value={categoria.titulo}>
                    {categoria.titulo}
                  </option>
                ))}
              </select>
              {errors.categoria && <div style={{ color: 'red' }}>{errors.categoria}</div>}
            </div>
            <div className="form-row-edit-card">
              <label htmlFor="imagen">Imagen:</label>
              <input
                type="text"
                id="imagen"
                
                onChange={(event) => setImagen(event.target.value)}
                placeholder={errors.imagen ? 'Este campo es obligatorio' : imagen }
                className={errors.imagen ? 'error' : ''}
              />
            </div>
            <div className="form-row-edit-card">
              <label htmlFor="video">Video:</label>
              <input
                type="text"
                id="video"
                
                onChange={(event) => setVideo(event.target.value)}
                placeholder={errors.video ? 'Este campo es obligatorio' : video }
                className={errors.video ? 'error' : ''}
              />
            </div>
            <div className="form-row-edit-card">
              <label htmlFor="descripcion">Descripción:</label>
              <textarea
                id="descripcion"
              
                onChange={(event) => setDescripcion(event.target.value)}
                placeholder={descripcion}
              />
            </div>
            <div className="form-row-edit-card">
              <div className="form-row-edit-card-btns">

                <button type="submit">GUARDAR</button>
                <button type="reset" onClick={handleReset}>LIMPIAR</button>

              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import dataCategoriesColors from '../../data/DataCategoriesColors';
import videosData from '../../data/videosData';
import './NewVideo.css';

const NewVideo = ({ addNewVideo }) => {
  const [categoria, setCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [video, setVideo] = useState('');
  const [descripcion, setDescripcion] = useState('');
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
      id: uuidv4(),
      categoria,
      nombre,
      imagen: `${process.env.PUBLIC_URL}${imagen}`,
      video: `${process.env.PUBLIC_URL}${video}`,
      descripcion,
      fav: false,
    };
    videosData.push(newCard);
    navigate('/');
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
    <div className="new-video-container">
      <div className="new-video-header">
        <h2>NUEVO VIDEO</h2>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      </div>
      <div className="new-video-form">
        <h3>Crear Tarjeta</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="titulo">Título:</label>
            <input
              type="text"
              id="titulo"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              placeholder={errors.nombre ? 'Este campo es obligatorio' : 'Ingrese el título'}
              className={errors.nombre ? 'error' : ''}
            />
          </div>
          <div className="form-row">
            <label htmlFor="categoria">Categoria:</label>
            <select
              id="categoria"
              value={categoria}
              onChange={(event) => setCategoria(event.target.value)}
              className={errors.categoria? 'error' : ''}
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
          <div className="form-row">
            <label htmlFor="imagen">Imagen:</label>
            <input
              type="text"
              id="imagen"
              value={imagen}
              onChange={(event) => setImagen(event.target.value)}
              placeholder={errors.imagen ? 'Este campo es obligatorio' : 'Ingrese el enlace de la imagen'}
              className={errors.imagen ? 'error' : ''}
            />
          </div>
          <div className="form-row">
            <label htmlFor="video">Video:</label>
            <input
              type="text"
              id="video"
              value={video}
              onChange={(event) => setVideo(event.target.value)}
              placeholder={errors.video ? 'Este campo es obligatorio' : 'Ingrese el enlace del video'}
              className={errors.video ? 'error' : ''}
            />
          </div>
          <div className="form-row">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(event) => setDescripcion(event.target.value)}
              placeholder="¿de qué se trata este vídeo?"
            />
          </div>
          <div className="form-row">
            <button type="submit">GUARDAR</button>
            <button type="reset" onClick={handleReset}>LIMPIAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewVideo;
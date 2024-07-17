import React, { useState } from 'react';
import './App.css';
import VideosList from './componentes/VideosList/VideosList';
import Categoria from './componentes/Categoria';
import NewVideo from './pages/NewVideo/NewVideo';
import Banner from './componentes/Banner/Banner';
import Footer from './componentes/Footer';
import { v4 as uuid } from 'uuid';

import dataCategoriesColors from './data/DataCategoriesColors';
import videosData from './data/videosData';

function App() {
  const [categorias, actualizarCategorias] = useState(dataCategoriesColors);
  const [cards, actualizarCards] = useState(videosData);
  const [mainVideo, setMainVideo] = useState(        
    {
      id: uuid(),
      categoria: "FRONT END",
      imagen: "https://i.ytimg.com/vi/ov7vA5HFe6w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6ES-hBLVji9KDUvULp-U4qyoV9A",
      video: "https://www.youtube.com/watch?v=ov7vA5HFe6w",
      nombre: "Challenge React",
      descripcion: "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React",
      fav: true
    }
    )

  
  // Define a function to handle video selection
  const handleVideoSelect = (card) => {
    setMainVideo({
      nombre: card.nombre,
      video: card.video,
      categoria: card.categoria,
      descripcion: card.descripcion,
    });
  };

  // Define a function to add a new video
  const addNewVideo = (newCard) => {
    actualizarCards([...cards, newCard]);
  };

  // Update category color
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const categoriasActualizados = categorias.map((categoria) => {
      if (categoria.id === id) {
        categoria.colorPrimario = color
      }

      return categoria
    })

    actualizarCategorias(categoriasActualizados)
  }

  const like = (id) => {
    console.log("like", id)
    const cardsActualizados = cards.map((card) => {
      if (card.id === id) {
        card.fav = !card.fav
      }
      return card
    })

    actualizarCards(cardsActualizados)
  }

  //Eliminar card
  const eliminarCard = (id) => {
    console.log("Eliminar card", id)
    const nuevosCards = cards.filter((card) => card.id !== id)
    actualizarCards(nuevosCards)
  }

  // Render the App component
  return (
    <div className="App">
      {/* Pass the mainVideo state and the handleVideoSelect function as props to the Banner component*/ }
      <Banner
        key={mainVideo.id}
        mainVideo={mainVideo}
        onSelectVideo={handleVideoSelect}
        categorias={categorias}
      />

      <div className="block-for-videos-container">

      {
      categorias.map((categoria) => <Categoria
        datos={categoria}
        key={categoria.titulo}
        cards={cards.filter(card => card.categoria === categoria.titulo)}
        eliminarCard={eliminarCard}
        actualizarColor={actualizarColor}
        like={like}
        onSelectVideo={handleVideoSelect} // Add this prop
      />
      )
    }

      </div>
  

      <Footer />

    </div>
  );
}

export default App;
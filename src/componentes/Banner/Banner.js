import React from 'react';
import './Banner.css';
import { useState, useEffect  } from 'react';
import ReactPlayer from 'react-player';

// Define the Banner component
const Banner = ({ mainVideo, onSelectVideo, categorias }) => {

// Find the category that matches the mainVideo's category
const category = categorias.find((categoria) => categoria.titulo === mainVideo.categoria);

// Use the primary color of the category as the background color
const backgroundColor = category ? category.colorPrimario : '#6BD1FF';

    // Render the Banner component
    return (
        <div className="banner-container">
        <div className="banner-block-1">
            <h1>
            <span className="banner-block-1-categoria" style={{ backgroundColor }} >{mainVideo.categoria}</span>
            </h1>
            <h2 className="banner-block-1-nombre">{mainVideo.nombre}</h2>
            <p className="banner-block-1-descripcion">{mainVideo.descripcion}</p>
        </div>
        <div className="banner-block-2" >
            {/* // Render the main-video-container div*/ }
                <div className="main-video-container" style={{ backgroundColor }}>
                    {/* // Check if the video URL starts with "http" */}
                    {mainVideo.video.startsWith('http') ? (
                        // If it's a YouTube URL, render a ReactPlayer component
                        <ReactPlayer url={mainVideo.video} light={true} playIcon={<div />}  className="main-video" controls />
                    ) : (
                        // If it's a local file path, render a video element
                        <video src={process.env.PUBLIC_URL + '/' + mainVideo.video} className="main-video" controls />
                    )}
                        {/* // Render the video title */ }
                    {/* <h3 className="main-vid-title">{mainVideo.title}</h3> */ }
                </div>
        </div>
        </div>
    );
};

export default Banner;
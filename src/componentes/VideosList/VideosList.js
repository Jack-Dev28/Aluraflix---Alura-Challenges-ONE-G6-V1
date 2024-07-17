import React from 'react';
import videosData from '../../data/videosData';
import ReactPlayer from 'react-player';
import './VideosList.css';

const VideosList = ({ onSelectVideo }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleVideoSelect = (video, index) => {
    onSelectVideo(video);
    setActiveIndex(index);
  };

  return (
    <div id="videosList" className="videosList">
      {videosData.map((item, index) => (
        <div key={index} className={`card ${index === activeIndex ? 'active' : ''}`} onClick={() => handleVideoSelect(item, index)}>
          <div className="block-1">
            {item.video.startsWith('http') ? (  
              // If the video URL starts with "http", assume it's a YouTube URL
              <ReactPlayer url={item.video} controls={false} light={true}  width="100%" height="100%" />
            ) : (
              // Otherwise, assume it's a local file path
              <video width="100%" height="100%" >
                <source src={item.video} type="video/mp4" />
              </video>
            )}
          </div>
          <div className="block-2">
            <h3 className="card-title">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosList;
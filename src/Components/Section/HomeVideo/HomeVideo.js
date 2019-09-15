import React from 'react';

import './HomeVideo.css';

export default ({youtubeId}) => {
    return (
        <div className="homeVideoContainer">
            <iframe className="homeVideo" src={"https://www.youtube.com/embed/MnfZeToSTL4?playlist=MnfZeToSTL4&loop=1&modestbranding=1&autoplay=1&mute=1;rel=0&amp;controls=0&amp;showinfo=0"}
            frameborder="0"
            allowfullscreen
            allow="autoplay" />
        </div>
    )
}
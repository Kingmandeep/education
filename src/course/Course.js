import React from 'react'
import VideoPlayer from "react-video-js-player";
import maa from "./dhe.mp4";

import "./course.css"
export default function Course() {
    const videoSrc1=maa;
   
    const poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    return (
        <div className="prevcourse">
            <h1 className="h11"><span>P</span>rev <span>L</span>ectures</h1>
            <VideoPlayer
            
            src={videoSrc1}
            poster={poster}
            width="600"
            height="350"
           
            playbackRates={[0.5,0.75,1,1.5,1.75,2]}
            ></VideoPlayer>
            
            
            
        </div>
    )
}

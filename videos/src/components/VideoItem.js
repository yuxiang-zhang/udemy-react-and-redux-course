import React from "react";
import './videoitem.css';

const VideoItem = ({ video, selectVideoCallback }) => {
    return (
        <div onClick={() => selectVideoCallback(video)} className="video-item item">
            <img alt={video.snippet.title}
                src={video.snippet.thumbnails.medium.url}
                className="ui image"
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;

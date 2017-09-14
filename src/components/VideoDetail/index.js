import React from 'react';

const VideoDetail = ({video}) => {
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
return (
    <div className="video-detail com-md-8">
        <div className="embed-responsive embed-responsive-16by19">
            <iframe src={url} frameborder="0" className="embed-responsive-item"></iframe>
        </div>
        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    </div>
)
};

export default VideoDetail;
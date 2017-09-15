import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const heading = video.snippet.title;
    return (
        <li
            onClick={()=> onVideoSelect(video)}
            className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} alt="none" className="media-object"/>
                </div>
            </div>

            <div className="media-body">
                <div className="media-heading">
                    {heading}
                </div>
            </div>
        </li>
    )

};

export default VideoItem;
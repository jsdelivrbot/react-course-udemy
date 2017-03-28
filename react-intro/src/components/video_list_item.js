import React from 'react';

// using destructuring to pull out 'video' object from props passed in by parent component
const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url; // from youtube response object

    return (
        // execute callback function on click, passing video data from child to parent
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object"/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
import React from 'react';
import VideoListItem from './video_list_item';

// no need for a state here so we make this a functional component
// Functional Component - props parameter = data passed in from parent 
const VideoList = (props) => {
    // iterate over videos and return a new VideoListItem component with video data passed in
    // add a unique 'key' property to each element when rendering a list     
    const videoItems = props.videos.map((video) => {
        return (
            /* continue passing onVideoSelect callback function through to child component */
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        // add classes to components in jsx using className attribute
        // passing an array in jsx will render all items in the array
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
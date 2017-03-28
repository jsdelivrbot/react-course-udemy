// don't need filepaths for node modules because they are namespaced (can only have one)
import React, { Component } from 'react'; // this library knows how to work with components
import ReactDOM from 'react-dom'; // this library is used to render components to the DOM
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// we need filepaths for importing from local files (because multiple files can have same name)
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD3LupJOeCUlNpghYFIPkSOjpGFi3T6JoY';

// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        // set shared data on root component's state
        this.state = {
            videos: [],
            selectedVideo: null
        };

        // call local component method for inital search
        this.videoSearch('surfboards');
    }

    // define a function on this component
    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({ // setting state causes component (and children) to re-render
                videos,
                selectedVideo: videos[0] // set inital video
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); // throttle search-while-typing

        return ( // use parenthesies for multi-line jsx
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />

                {/* pass data to component using props (custom attribute) */}
                <VideoDetail video={this.state.selectedVideo} />

                {/* pass a callback function as prop to fire when a video is selected and update the root component's state */}
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        ); // this is jsx (looks like HTML)
    }
};

// Take this component's generated HTML and put it on the page (in the DOM)
// pass an instance of our App class (self-closing tag is nothing inside)
// second argument is target element on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
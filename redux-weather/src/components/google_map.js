import React, { Component } from 'react';

class GoogleMap extends Component {
    // lifecycle method - called automatically after component is rendered to the screen
    componentDidMount() {
        // pass an HTML element to google maps - this.refs.map made available by the 'ref' attribute below
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />; // creates reference to the HTML element - this.refs.map
    }
}

export default GoogleMap;
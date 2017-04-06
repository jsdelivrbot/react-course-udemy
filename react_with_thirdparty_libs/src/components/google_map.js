import React, { Component } from 'react';

export default class extends Component {

    // step (1) - make sure component only renders one time returning false from lifecycle method
    shouldComponentUpdate() {
        return false; // after first time, never re-render again
    }

    // lifecycle method for when new props are being passed in
    // use this to migrate from one set of props to another
    componentWillReceiveProps(nextProps) {
        this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
    }

    componentDidMount() {
        // render map to DOM element we have referece to via 'ref' attribute below
        this.map = new google.maps.Map(this.refs.map, {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom: 8
        });
    }

    render() {
        return (
            // use ref to get direct reference to DOM element
            <div id="map" ref="map"/> 
        );
    }
}


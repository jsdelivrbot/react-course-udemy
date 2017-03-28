import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        // used for event handler callbacks accessing component's state or props
        // bind the class/component's 'this' context within our class method
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // Fetch weather data through action-creator
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        });
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    className="form-control"
                    placeholder="Get a five-day forecast in your cities"
                    value={this.state.term}
                    onChange={this.onInputChange} />

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// pass null as first arg - don't need to access state in this Container
export default connect(null, mapDispatchToProps)(SearchBar);
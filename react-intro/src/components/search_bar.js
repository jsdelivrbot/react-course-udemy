import React, { Component } from 'react'; // import React for all components that use jsx

// Functional component - set to a function that returns some jsx - no state object
// Class-based component - defined as a class with a render() method - have a state object

// extend React.Component for added functionality
class SearchBar extends Component {
    // constructor called automatically when new instance is created
    constructor(props) {
        // calling parent class method on Component - must call
        super(props);

        // each component has their own state object in its constructor
        // when its state changes the component and all of its children re-renders
        this.state = {
            term: ''
        };
    }

    // must define a render function that returns some jsx
    render() {
        // tap into evnets using 'on' + 'EventName' = {eventHandler}
        // wrap javascript in {} when using inside jsx
        // read from state using this.state
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    // define event handlers called from the jsx
    onInputChange(term) {
        this.setState({term}); // modify state using this.setState()
        this.props.onSearchTermChange(term); // execute callback passed in from parent component
    }
}

export default SearchBar; // export our component for usage in other files
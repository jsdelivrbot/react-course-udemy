import _ from 'lodash';
import React, { Component } from 'react';
import Faker from 'faker';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // import animation library

export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = { quotes: [] };
  }

  onAddClick() {
    const quote = Faker.lorem.sentence();
    this.setState({ quotes: [ ...this.state.quotes, quote ]});
  }

  onRemoveClick(quote) {
    this.setState({ quotes: _.without(this.state.quotes, quote) });
  }

  renderQuotes() {
    return this.state.quotes.map((item, index) => {
      return (
        <li className="list-group-item" key={item}>
          {item}
          <button onClick={this.onRemoveClick.bind(this, item)} className="remove btn btn-danger">Remove</button>
        </li>
      );
    });
  }

  render() {
    // define transition options to pass to ReactCSSTransitionGroup component
    const transitionOptions = {
      transitionName: "fade", // name of our animation
      transitionEnterTimeout: 500, // enter animation duration (ms)
      transitionLeaveTimeout: 500 // leave aniation duration (ms)
    };

    return (
      <div>
        <button onClick={this.onAddClick.bind(this)}>Add</button>
        <ul className="list-group">
          <ReactCSSTransitionGroup {...transitionOptions}> {/* wrap component(s) you want to animate and pass options */}
            {this.renderQuotes()}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

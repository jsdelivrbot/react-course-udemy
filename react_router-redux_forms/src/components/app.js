import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        { this.props.children } {/* define where to render components from nested routes */}
      </div>
    );
  }
}

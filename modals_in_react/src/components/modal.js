import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { store } from '../index'; // import store to pass to Provider
import { Provider } from 'react-redux'; // import Provider because we are breaking component heirarchy

class Modal extends Component {
  componentDidMount() { 
    // step (1)
    // create a modal-container div on the fly and append to document.body
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentWillUpdate() {
    // step (2)
    // re-render component if content passed in has changed
    this._render();
  }

  componentWillUnmount() {
    // step (3)
    // cleanup - remove DOM elements we created
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  _render() {
    // render this.props.children (modal content - child elements within <Modal></Modal> tag)
    // to the new container div we created above on document.body
    ReactDOM.render(
      <Provider store={store}>  {/* need a <Provider> at some point in the parent heirarchy when rendering a Container / connected component */}
        <div>{this.props.children}</div>
      </Provider>,
      this.modalTarget
    );
    // since we arent appending this under the root component which is wrapped in <Provider>, we need to add it here
  }

  render() {
    return <noscript />; // render/display nothing
  }
}

export default Modal;

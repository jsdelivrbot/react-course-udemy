// this is our higher order component
// general structure is common across all HOCs
import React, { Component } from 'react';
import { connect } from 'react-redux';

// argument is component that is getting wrapped
export default function(ComposedComponent) {
    class Authentication extends Component {
        // need to define 'contextTypes' object in order to use context
        // static = class-level property:
        //      don't need to create a class instance to access this property.
        //      allows us to call router functions within this class.
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            // console.log(this.props.authenticated);

            // programmatic navigation:
            // get access to Router via 'context' - like props but spans entire render tree
            // need to define contextTypes object above in order to use context properties
            if (!this.props.authenticated) {
                this.context.router.push('/');
            }
        }

        // gets called when a component is about to re-render / gets handed new props
        componentWillUpdate(nextProps) {
            // navigate back to home after sign out
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        render() {
            // ensure any props passed in are attached to composed component
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            authenticated: state.authenticated
        };
    }

    return connect(mapStateToProps)(Authentication); // return a wrapped component with additional funcitonality
}

// In some other location...Not in this file...
// We want to use this HOC
/*
    import Authentication // This is my HOC
    import Resources // This is the component I want to wrap

    const ComposedComponent = Authentication(Resources);

    // In some render method...
    <ComposedComponent />
*/
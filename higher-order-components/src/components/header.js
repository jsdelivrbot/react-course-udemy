import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
    authButton() {
        if (this.props.authenticated) {
            // call action cretor on click toggling authenitcated state
            return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>;
        }

        return <button onClick={() => this.props.authenticate(true)}>Sign In</button>;
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        {/* this is our protected route, must be authenticated to access */}
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        {this.authButton()}
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.authenticated
    };
}

// connect is a Higher Order Component - 
// wrapping a regular componnet to enhance its functionality
export default connect(mapStateToProps, actions)(Header);

// we export the 'enhanced' version of our standard component
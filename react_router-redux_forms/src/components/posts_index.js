import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    // component lifecycle method automatically called by React before
    // it is rendered to the DOM for the FIRST time, not called on re-rendering
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    {/* Link tag for React Router navigation to new route -> renders as <a></a> */}
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                List of blog posts.
            </div>
        )
    }
};

// shortcut for removing mapDispatchToProps function in Containers -
// pass imported action creator directly into the connect function
export default connect(null, { fetchPosts })(PostsIndex);
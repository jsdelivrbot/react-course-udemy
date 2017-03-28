import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
    render() {
        const { handleSubmit } = this.props; // function to call on form submit - passed in by redux-form

        return (
            /* pass action creator to handleSubmit - called when form is valid and submitted */
            <form onSubmit={handleSubmit(createPost)}>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <Field type="text" className="form-control" component="input" name="title" />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <Field type="text" className="form-control" component="input" name="categories" />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <Field type="text" className="form-control" component="textarea" name="content" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        // returning an error on the same key name as the form field makes it invalid
        errors.title = 'Enter a username';
    }

    return errors;
}

// use reduxForm like connect function with our component
// it injects some props into our component above

export default reduxForm({
    form: 'PostsNew', // some unique name
    validate // our custom validation function
})(PostsNew);

// redux form: user types something in .... record it on application state
/*
state === {
    form: {
        PostsNewForm: {
            title: '...',
            categories: '...',
            content: '...'
        }
    }
}
*/
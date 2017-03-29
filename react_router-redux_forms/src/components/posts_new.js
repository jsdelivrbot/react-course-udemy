import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

const form = reduxForm({
    form: 'PostsNew',
    validate
});

const renderInput = field => (
    <div className={`form-group ${field.meta.touched && field.meta.invalid ? 'has-danger' : ''}`}>
        <label>{field.labelText}</label>
        {/* destructure field.input config object passed in from Field and attach all of its properties to the input */}
        <input {...field.input} className="form-control" />
        {/* coniditional rendering of an element. if left evaluates true, right will return */}
        {/* field.meta contains additional properties of input, like touched/error/valid, etc. */}
        {field.meta.touched && field.meta.error && <div className="error text-help">{field.meta.error}</div>}
    </div>
);

const renderTextArea = field => {
    return (
        <div className={`form-group ${field.meta.touched && field.meta.invalid ? 'has-danger' : ''}`}>
            <label>{field.labelText}</label>
            <textarea {...field.input} className="form-control" />
            {field.meta.touched && field.meta.error && <div className="error text-help">{field.meta.error}</div>}
        </div>
    );
};

class PostsNew extends Component {
    // like props -> will give us access to this.context.router within this class
    // used for programmatic routing navigation
    static contextTypes = { // define static contextTypes object on this class
        // whenever an instance of this class is created, react will search all of this components parents
        // until it finds a component that has a piece of context called 'router' (will be React Router)
        router: PropTypes.object
    };

    onSubmit(formProps) {
        // action returns a promise
        this.props.createPost(formProps)
            .then(() => {
                // blog post has been created, navigate user to the index using context object above
                this.context.router.push('/');
            });
    }

    render() {
        const { handleSubmit } = this.props; // function to call on form submit - passed in by redux-form

        return (
            /* pass action creator to handleSubmit - called when form is valid and submitted */
            // using callback function with 'this' inside -> need to bind correct context
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>

                <Field name="title" type="text" component={renderInput} labelText="Title:" />
                <Field name="categories" type="text" component={renderInput} labelText="Categories:" />
                <Field name="content" component={renderTextArea} labelText="Content:" />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

// validate function runs anytime a form input is changed
// also prevents form from submitting if invalid
function validate(formProps) {
    const errors = {};

    if (!formProps.title) {
        errors.title = 'Enter a username';
    }

    if (!formProps.categories) {
        errors.categories = 'Enter categories';
    }

    if (!formProps.content) {
        errors.content = 'Enter content';
    }

    return errors;
}

export default connect(null, { createPost })(form(PostsNew));


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
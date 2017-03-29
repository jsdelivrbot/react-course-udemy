import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

// define and export route path-component mappings 
export default (
    <Route path="/" component={App}>
        {/* if route is '/', show App component and PostsIndex component */}
        <IndexRoute component={PostsIndex} />
        
        {/* nested route /posts/new. nested component PostsNew is passed to parent component App as props.children */}
        <Route path="posts/new" component={PostsNew} />

        {/* dynamic route params -> will be passed into PostsShow component as this.props.params.id */}
        <Route path="posts/:id" component={PostsShow} />
    </Route>
);
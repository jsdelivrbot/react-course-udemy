import React from 'react';
import { connect } from 'react-redux';
import SelectedPostsSelector from 'selectors/selected_posts'; // the selector we created

const SelectedPostsList = (props) => {
  return (
    <ul className="list-group">
      {
        props.posts.map(post => {
          return <li className="list-group-item" key={post.id}>{post.title}</li>
        })
      }
    </ul>
  );
};

// wire up our imported selector passing in redux state
// return value from selector will update this.props.posts, and re-render component
const mapStateToProps = state => {
  return {
    posts: SelectedPostsSelector(state)
  };
};

export default connect(mapStateToProps)(SelectedPostsList);

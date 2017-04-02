// Reselect selector
// Takes a list of posts and post Ids (pieces of state), and picks out
// the selected Posts (outputs calculated piece of state)
import _ from 'lodash';
import { createSelector } from 'reselect'; // method used to create a selector

// Create select functions to pick off the pieces of state we care about
// for this calculation

// whenever global redux state changes, these functions will be executed
const postsSelector = state => state.posts
const selectedPostsSelector = state => state.selectedPostIds

// then the new values from above will be sent into this function
const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = _.filter(
    posts,
    post => _.contains(selectedPostIds, post.id)
  );

  return selectedPosts;
};

export default createSelector(
  postsSelector, // pick off a piece of state
  selectedPostsSelector, // pick off a piece of state
  getPosts // last argument is the function that has our select logic
);

import store from '../store';
import { fetchPhotos } from '../actions';

// create our custom callback function for route handler
export function onPhotosEnter() {
  store.dispatch(fetchPhotos()); // call action-creator to fetch data (using redux-thunk .dispatch())
}

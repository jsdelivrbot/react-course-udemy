import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  // Vanilla redux expects us to return an action (plain js object)
  // Redux thunk allows us to return a function
  return (dispatch) => {
    request.then(({data}) => {
      // only dipatch action when request resolves
      dispatch({ type: 'FETCH_PROFILES', payload: data })
    });
  };
}

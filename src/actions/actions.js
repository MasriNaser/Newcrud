import {
  FETCH_GAMES,
  FETCH_GAME,
  SAVE_GAME,
  DELETE_GAME,
  UPDATE_GAME,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './types';
// import { getFirebase } from 'react-redux-firebase';

export const fetchGames = () => dispatch => {
  fetch('http://localhost:3004/users')
    .then(res => res.json())
    .then(users =>
      dispatch({
        type: FETCH_GAMES,
        payload: users
      })
    );
};
export const fetchGame = id => dispatch => {
  fetch(`http://localhost:3004/users/${id}`)
    .then(res => res.json())
    .then(user => {
      dispatch({
        type: FETCH_GAME,
        payload: user
      });
    });
};
export const deleteGame = id => dispatch => {
  fetch(`http://localhost:3004/users/${id}`, {
    method: 'DELETE'
  }).then(res => {
    if (res.ok) {
      dispatch({
        type: DELETE_GAME,
        payload: id
      });
    }
  });
};

export const saveGame = formInput => dispatch => {
  return fetch('http://localhost:3004/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      title: formInput.title,
      logoUrl: formInput.cover,
      username: formInput.username
    })
  })
    .then(res => res.json())
    .then(newUser => {
      // console.log(newUser, 'from fetching');
      return dispatch({
        type: SAVE_GAME,
        payload: newUser
      });
    });
};
//   title: data.title,
//   logoUrl: data.cover,
//   username: data.username,
// id:

export const upDateGame = updatedItem => dispatch => {
  return fetch(`http://localhost:3004/users/${updatedItem.id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedItem),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(updateUser => {
      console.log(updateUser, 'from updategame');
      return dispatch({
        type: UPDATE_GAME,
        payload: updateUser
      });
    });
};
export const signIn = credentials => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { email, password } = credentials;
    firestore
      .collection('games')
      .add({
        ...credentials,
      })
      .then(() => dispatch({ type: LOGIN_SUCCESS }))
      .catch(error =>
        dispatch({
          type: LOGIN_ERROR,
          error
        })
      );
  };
};




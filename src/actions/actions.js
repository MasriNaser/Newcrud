import {
  FETCH_GAMES,
  FETCH_GAME,
  SAVE_GAME,
  DELETE_GAME,
  UPDATE_GAME,
  ADD_GAME_FIRE
} from './types';

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
      // console.log(user, 'user from fetchGameeeeeeeee');
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
// export const passData = user => dispatch => ({
//   return fetch('http://localhost:3004/users/', {
//     method: 'PUT',
//     body: JSON.stringify(user),
//     headers: {
//       'content-type': 'application/json'
//     }
//   })
//     .then(res => res.json())
//     .then(user => {
//       return dispatch({
//         type: 'PASS_DATA',
//   payload: user
//       });
//     });
//     }
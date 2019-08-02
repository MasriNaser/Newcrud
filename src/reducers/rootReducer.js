import { combineReducers } from 'redux';
// import getGoal  from './createGoal';
import games from './games';
import {firebaseReducer} from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
const rootReducer = combineReducers({
 firestoreGoals: firestoreReducer,
 firebase: firebaseReducer,
 games: games
})
export default rootReducer
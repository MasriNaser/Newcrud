import { combineReducers } from 'redux';
import games from './games';
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
 firestore: firestoreReducer,
 games: games
})
export default rootReducer
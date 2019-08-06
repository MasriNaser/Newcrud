import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import firebase from '../config/index';
import logger from 'redux-logger';
import { getFirebase } from 'react-redux-firebase';

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunk.withExtraArgument({ getFirestore, getFirebase }),
        logger
      ),
      reduxFirestore(firebase)
    )
  );
};

export default configureStore;

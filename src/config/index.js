import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//import { API_KEY } from './key'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyBv0n-33l6DHTJLmeKInlmzJ1C7jQEholU",
    authDomain: "goalz-a55a8.firebaseapp.com",
    databaseURL: "https://goalz-a55a8.firebaseio.com",
    projectId: "goalz-a55a8",
    storageBucket: "",
    messagingSenderId: "208938992356",
    appId: "1:208938992356:web:d9c81be726f5b774"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase

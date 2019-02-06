import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBBJvjM8ZFEV7acFXFZKRBp6xzDY4QUagY",
    authDomain: "bird-observation.firebaseapp.com",
    databaseURL: "https://bird-observation.firebaseio.com",
    projectId: "bird-observation",
    storageBucket: "bird-observation.appspot.com",
    messagingSenderId: "66063751258"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
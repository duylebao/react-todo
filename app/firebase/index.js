import firebase from 'firebase'

// Initialize Firebase
try{
  var config = {
    apiKey: "AIzaSyAatNUS4iErg-w8Grm7XJsBJegzEGjfcFM",
    authDomain: "todoapp-591bf.firebaseapp.com",
    databaseURL: "https://todoapp-591bf.firebaseio.com",
    storageBucket: "todoapp-591bf.appspot.com",
    messagingSenderId: "643444716035"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

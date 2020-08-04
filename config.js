import firebase from 'firebase'
require("@firebase/firestore")


var firebaseConfig = {
    apiKey: "AIzaSyBSnonkksb-d2a0S6cFLZ6SgY8c363-9NY",
    authDomain: "survey12345678901234567890.firebaseapp.com",
    databaseURL: "https://survey12345678901234567890.firebaseio.com",
    projectId: "survey12345678901234567890",
    storageBucket: "survey12345678901234567890.appspot.com",
    messagingSenderId: "288544834295",
    appId: "1:288544834295:web:98c77533cc6c0e129f09f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
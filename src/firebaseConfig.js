  import firebase from 'firebase'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9UjLB9tTW83SIm5HSR8lvwcwKkOIrLMc",
    authDomain: "survey-app-3f3ac.firebaseapp.com",
    databaseURL: "https://survey-app-3f3ac.firebaseio.com",
    projectId: "survey-app-3f3ac",
    storageBucket: "survey-app-3f3ac.appspot.com",
    messagingSenderId: "379833203724"
  };
  firebase.initializeApp(config);

  export const database = firebase.database()
  export const auth = firebase.auth()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()
import firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8RMNQrZ7S_zNlcpR4cVCXYj0ZwbV5pkQ",
    authDomain: "project71-e0067.firebaseapp.com",
    projectId: "project71-e0067",
    storageBucket: "project71-e0067.appspot.com",
    messagingSenderId: "189103194746",
    appId: "1:189103194746:web:63d1f2588ce807efec71c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();
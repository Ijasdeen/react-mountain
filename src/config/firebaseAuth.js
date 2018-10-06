import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAqk5A_gS4CtNmQ6tgTgvLY60XPDQscPh4",
    authDomain: "ecommerce-6dfb3.firebaseapp.com",
    databaseURL: "https://ecommerce-6dfb3.firebaseio.com",
    projectId: "ecommerce-6dfb3",
    storageBucket: "ecommerce-6dfb3.appspot.com",
    messagingSenderId: "118779071884"
  };

  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
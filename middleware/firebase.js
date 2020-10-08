import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgYyW-4S1Esr389pR64HhTtn4HbvaZNss",
    authDomain: "akarshbarar.firebaseapp.com",
    databaseURL: "https://akarshbarar.firebaseio.com",
    projectId: "akarshbarar",
    storageBucket: "akarshbarar.appspot.com",
    messagingSenderId: "575442006242",
    appId: "1:575442006242:web:880814f24f5357102feebb",
    measurementId: "G-2SP8YG951Z"
  };
  var db;
  if(!firebase.apps.length){
    db= firebase.initializeApp(firebaseConfig);

  }
  else{
    db=firebase.app()
  }

  
  export default db;

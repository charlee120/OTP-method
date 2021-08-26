import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAX7CK73C1xTnlGhRvCA3QomQttOEQTHGY",
    authDomain: "fineloptverifier.firebaseapp.com",
    projectId: "fineloptverifier",
    storageBucket: "fineloptverifier.appspot.com",
    messagingSenderId: "523890644901",
    appId: "1:523890644901:web:c09e1798889051f522ba4c",
    measurementId: "G-VB3BJFLPP2"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
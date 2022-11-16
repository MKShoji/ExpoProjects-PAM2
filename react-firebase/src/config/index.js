import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB39sPIy6O9KJgDSavYLIGuiOkS4O0a-sk",
  authDomain: "reactfire-pam2.firebaseapp.com",
  projectId: "reactfire-pam2",
  storageBucket: "reactfire-pam2.appspot.com",
  messagingSenderId: "663964959968",
  appId: "1:663964959968:web:c96eb3f96351f9f3bfbc85"
};


if(firebase.app.lenght === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAKnUh4ef9jpgFZOwtAiRaFXQwsZafH0bk",
  authDomain: "fireblogs123456.firebaseapp.com",
  projectId: "fireblogs123456",
  storageBucket: "fireblogs123456.appspot.com",
  messagingSenderId: "249604017814",
  appId: "1:249604017814:web:119a9a53bcaee803a5bcb7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
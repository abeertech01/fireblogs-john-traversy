import firebase from "firebase/app"; // [1]
import "firebase/firestore"; // [2]

var firebaseConfig = {
  apiKey: "AIzaSyAKnUh4ef9jpgFZOwtAiRaFXQwsZafH0bk",
  authDomain: "fireblogs123456.firebaseapp.com",
  projectId: "fireblogs123456",
  storageBucket: "fireblogs123456.appspot.com",
  messagingSenderId: "249604017814",
  appId: "1:249604017814:web:119a9a53bcaee803a5bcb7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // [3]
const timestamp = firebase.firestore.FieldValue.serverTimestamp; // [4]

export { timestamp };
export default firebaseApp.firestore();
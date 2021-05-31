import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAwkuWvfHmp7-GC8vdnmKFTQv6Nuzk-Cs0",
  authDomain: "pro-77-cd3dd.firebaseapp.com",
  projectId: "pro-77-cd3dd",
  storageBucket: "pro-77-cd3dd.appspot.com",
  messagingSenderId: "79518183962",
  appId: "1:79518183962:web:af2351f80ae59486cc97a3"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
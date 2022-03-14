import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "react-n-uber-eats-clone.firebaseapp.com",
  projectId: "react-n-uber-eats-clone",
  storageBucket: "react-n-uber-eats-clone.appspot.com",
  messagingSenderId: "",
  appId: ""
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;

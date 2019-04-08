import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAfOghCfHiCuBlADGbTKubKyQurOITlEjg",
  authDomain: "react-slack-clone-64c69.firebaseapp.com",
  databaseURL: "https://react-slack-clone-64c69.firebaseio.com",
  projectId: "react-slack-clone-64c69",
  storageBucket: "react-slack-clone-64c69.appspot.com",
  messagingSenderId: "347114976986"
};
firebase.initializeApp(config);

export default firebase;

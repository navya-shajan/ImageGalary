import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwj0CdqWmuMTeERxLTjQKHuHn72L4-wi0",
    authDomain: "imagegalary-80a8f.firebaseapp.com",
    projectId: "imagegalary-80a8f",
    storageBucket: "imagegalary-80a8f.appspot.com",
    messagingSenderId: "699989238468",
    appId: "1:699989238468:web:7f1718d5c171e33bb8df91"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectStorage, projectFirestore};
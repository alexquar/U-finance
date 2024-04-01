import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBq2k8sVNLJE-5EWcWQ5rNItpysVb85JCc",
    authDomain: "u-finance-app.firebaseapp.com",
    projectId: "u-finance-app",
    storageBucket: "u-finance-app.appspot.com",
    messagingSenderId: "862928214548",
    appId: "1:862928214548:web:c79614a9d38f916923a501",
    measurementId: "G-8TFRP0KGWB"
  };

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
export {projectFirestore, projectAuth}
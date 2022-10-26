// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxWBoE8wgf-EptACbCIzXNPAKELYPUG5A",
    authDomain: "microservice-post.firebaseapp.com",
    projectId: "microservice-post",
    storageBucket: "microservice-post.appspot.com",
    messagingSenderId: "920344635182",
    appId: "1:920344635182:web:808a6c4a1758f608bbfcbf"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = { firebase }

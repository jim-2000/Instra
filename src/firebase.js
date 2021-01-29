// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
// const firebaseConfig = ;

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAPII2-ePj9ZpkCFtOk9aj10IOs-k3OcjU",
    authDomain: "instragram-df6ec.firebaseapp.com",
    projectId: "instragram-df6ec",
    storageBucket: "instragram-df6ec.appspot.com",
    messagingSenderId: "153206774334",
    appId: "1:153206774334:web:3753b27420bc7a8b57cf6f",
    measurementId: "G-8VXHG7G688"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()

export { db, auth , storage }
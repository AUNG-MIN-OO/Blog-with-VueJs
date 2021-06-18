import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAssWjzXR3tiJhomF0sbLFBz25t4Vcy7w0",
    authDomain: "vue-blog-system-8fed1.firebaseapp.com",
    projectId: "vue-blog-system-8fed1",
    storageBucket: "vue-blog-system-8fed1.appspot.com",
    messagingSenderId: "1011071254324",
    appId: "1:1011071254324:web:711a95c538575049f72f61"
};

//firebase init
firebase.initializeApp(firebaseConfig)

//database setup
let db = firebase.firestore();

export {db};
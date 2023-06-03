import firebase from "firebase";
import "firebase/firestore"
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD20eCEvYTnC3TxYiz80UPAAgoCUiZCcyM",
    authDomain: "spend-wise-d2b1a.firebaseapp.com",
    projectId: "spend-wise-d2b1a",
    storageBucket: "spend-wise-d2b1a.appspot.com",
    messagingSenderId: "40522040959",
    appId: "1:40522040959:web:c156bb9f70cdfcd86aa14a"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export {projectFirestore, projectAuth}
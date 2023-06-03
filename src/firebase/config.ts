import firebase from 'firebase/app';
import "firebase/firestore"
import 'firebase/auth'

const firebaseConfig = {
    // apiKey: "AIzaSyD20eCEvYTnC3TxYiz80UPAAgoCUiZCcyM",
    // authDomain: "spend-wise-d2b1a.firebaseapp.com",
    // projectId: "spend-wise-d2b1a",
    // storageBucket: "spend-wise-d2b1a.appspot.com",
    // messagingSenderId: "40522040959",
    // appId: "1:40522040959:web:c156bb9f70cdfcd86aa14a",
apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export {projectFirestore, projectAuth}
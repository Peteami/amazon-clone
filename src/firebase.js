import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrSXKo2zp6oiCEtqwts_4xMmK6UO7f88Y",
  authDomain: "clone-a957c.firebaseapp.com",
  projectId: "clone-a957c",
  storageBucket: "clone-a957c.appspot.com",
  messagingSenderId: "418637615949",
  appId: "1:418637615949:web:d86323e978b408f98d9d04"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC4P2Yz4alxM4tHbAdOz7XtC4B2Ol7tmQ4",
  authDomain: "crown-sandbox-db.firebaseapp.com",
  databaseURL: "https://crown-sandbox-db.firebaseio.com",
  projectId: "crown-sandbox-db",
  storageBucket: "crown-sandbox-db.appspot.com",
  messagingSenderId: "912900555763",
  appId: "1:912900555763:web:5c1ad8a9afd5d02d9a4886",
  measurementId: "G-VDTGWBX8NL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

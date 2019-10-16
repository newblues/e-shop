import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDVMboxiTYK6aqh3-NJSk3t176WxR_c0C8',
  authDomain: 'e-shop-ddbb4.firebaseapp.com',
  databaseURL: 'https://e-shop-ddbb4.firebaseio.com',
  projectId: 'e-shop-ddbb4',
  storageBucket: 'e-shop-ddbb4.appspot.com',
  messagingSenderId: '216007635650',
  appId: '1:216007635650:web:578a4b24081d71d84b815b',
  measurementId: 'G-PHQ5J5DBZC'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // check if the user object is valid, if not we don't want to store it in firebase db
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // check if user already in db
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // date when user was created
    try {
      // create user into firease db
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

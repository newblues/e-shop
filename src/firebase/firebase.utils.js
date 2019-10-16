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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

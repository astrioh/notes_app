import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB4ll-6eg-2hhF6q-8B_lznzEQfzpvLnDc',
  authDomain: 'notes-db-e55b4.firebaseapp.com',
  databaseURL: 'https://notes-db-e55b4-default-rtdb.firebaseio.com',
  projectId: 'notes-db-e55b4',
  storageBucket: 'notes-db-e55b4.appspot.com',
  messagingSenderId: '828359114818',
  appId: '1:828359114818:web:1535375a713eaa66e56ddb',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

import firebase from 'firebase/app'
import 'firebase/firestore'

/* PROD */
export const config = {
  apiKey: 'AIzaSyCpYN6ymH9S60Fq7PcSzrRWP3Xixrx358o',
  authDomain: 'need-editor.firebaseapp.com',
  databaseURL: 'https://need-editor.firebaseio.com',
  projectId: 'need-editor',
  storageBucket: 'need-editor.appspot.com',
  messagingSenderId: '415729167075',
  appId: '1:415729167075:web:74a04e99c0372c533473d6',
  measurementId: 'G-V1J9KE6NDV'
}

firebase.initializeApp(config)
export const firestore = firebase.firestore()

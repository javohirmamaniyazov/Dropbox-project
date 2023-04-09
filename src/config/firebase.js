import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA91iow_8RxHoHLmPqcX2CAlFUrR9ZeKWk",
  authDomain: "dropbox-df090.firebaseapp.com",
  projectId: "dropbox-df090",
  storageBucket: "dropbox-df090.appspot.com",
  messagingSenderId: "832434384817",
  appId: "1:832434384817:web:e32f0f93723e7f502a5790",
  measurementId: "G-DQJ8T2Y6D3"
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
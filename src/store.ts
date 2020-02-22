import app from 'apprun';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const STORAGE_KEY = 'to-do-list';
const config = {
  apiKey: "AIzaSyBjuLxicuCnE8fad3XYz_x8ynxa7vlSiU4",
  authDomain: "mail-train-3862d.firebaseapp.com",
  databaseURL: "https://mail-train-3862d.firebaseio.com",
  projectId: "mail-train-3862d",
  storageBucket: "mail-train-3862d.appspot.com",
  messagingSenderId: "721702858615",
  appId: "1:721702858615:web:cc5c2f9a9362491b1d7b72"
};

firebase.initializeApp(config);
const db = firebase.firestore();
const ref = db.collection(STORAGE_KEY).doc("state")

app.on('save-state', state => ref.set(state));
ref.onSnapshot(doc => {
  if (doc.exists) app.run('new-state', doc.data())
});

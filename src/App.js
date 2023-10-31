import React from 'react';
import './App.css';


import firebase from "./firebase/app";
import "./firebase/firestore";
import "./firebase/auth";


import {useAuthstate} from 'react-firebase-hooks/auth';
import{useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyB9cQ_5Dp63S5w5lzNknCWmEK4zpTH3rtY",
  authDomain: "proj1-e9978.firebaseapp.com",
  projectId: "proj1-e9978",
  storageBucket: "proj1-e9978.appspot.com",
  messagingSenderId: "960018682541",
  appId: "1:960018682541:web:faf15960decbd0c373ac24"

})
const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;

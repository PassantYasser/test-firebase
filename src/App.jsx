import React from 'react';
import './App.css';


import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


import {useAuthstate} from 'react-firebase-hooks/auth';
import{useCollectionData} from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB9cQ_5Dp63S5w5lzNknCWmEK4zpTH3rtY",
  authDomain: "proj1-e9978.firebaseapp.com",
  projectId: "proj1-e9978",
  storageBucket: "proj1-e9978.appspot.com",
  messagingSenderId: "960018682541",
  appId: "1:960018682541:web:faf15960decbd0c373ac24"
}

const app = initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;

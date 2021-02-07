import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, serviceWorker } from './app';
import firebase from 'firebase';
//import 'firebase/analytics';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDd9BL6lEJUEFJ668C4S4Su0oaNvpoIV3I",
    authDomain: "resturant-reservation-f4409.firebaseapp.com",
    projectId: "resturant-reservation-f4409",
    storageBucket: "resturant-reservation-f4409.appspot.com",
    messagingSenderId: "262938916497",
    appId: "1:262938916497:web:80d98606fc8fe4e95f7130",
    measurementId: "G-CVQBK80G79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

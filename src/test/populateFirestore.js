const firebase =require('firebase');
require('firebase/firestore');
const {reservations,
    reviews,
    dateAvailabilities,
    restaurants}=require('./testData');
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
  const db=firebase.firestore();
  function populateCollection(collectionName,items){

        return Promise.all(items.map(item=>{
            const{id,...data}=item;
            return db.collection(collectionName)
            .doc(id)
            .set(data);
        }))
  }
  Promise.all([
      populateCollection('reservations',reservations),
      populateCollection('reviews',reviews),
      populateCollection('dateAvailabilities',dateAvailabilities),
      populateCollection('restaurants',restaurants),
  ])
  .then(()=>{
      console.log('Done!');
      process.exit(0);
  })
  .catch(err=>{
      console.log(err);
  })
import * as firebase from "firebase";

require("dotenv").config({ path: ".env.development" });
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

console.log("db url:", firebaseConfig.databaseURL);
const myDatabase = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, myDatabase as default, googleAuthProvider };
// firebase
//   .database()
//   .ref()
//   .set({
//     name: "Din-s-sharma",
//     age: 24,
//     hobby: "Timepass, JS"
//   }).then(()=>{
//     console.log('Data Saved successfully')
//   }).catch((e)=>{
//     console.log('Error Saving data', e.message)
//   });

// myDatabase.ref().update({
//   name:{
//     first:'Dins',
//     last:'Sharma'
//   },
//   job:{
//     title:'SDE'
//   }
// }).then(()=>{
//   console.log('Successfully updated')
// }).catch((e)=>{
//   console.log('Error updating', e.message)
// })

// myDatabase.ref("expenses").push({
//   title: "First Expense",
//   amount: 10001
// });
// myDatabase.ref("expenses").push({
//   title: "second Expense",
//   amount: 1006
// });
// myDatabase.ref("expenses").push({
//   title: "Third Expense",
//   amount: 10
// });

// myDatabase
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   });

// myDatabase.ref('expenses')
// .on('value',(snapshot)=>{

//   const expenses=[]
//   snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//     console.log(expenses)
//     // console.log(childSnapshot.val())
//   })
//   // const val = snapshot.val()
//   // console.log(val)
// })

// myDatabase.ref('expenses').push({
//   title:'Fourth',
//   amount:5000
// })

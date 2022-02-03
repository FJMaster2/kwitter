var firebaseConfig = {
    apiKey: "AIzaSyDefVOx-AcUpGH2pYjLrJvl_AzF-zWMV0c",
    authDomain: "kwitter-c46a9.firebaseapp.com",
    databaseURL: "https://kwitter-c46a9-default-rtdb.firebaseio.com",
    projectId: "kwitter-c46a9",
    storageBucket: "kwitter-c46a9.appspot.com",
    messagingSenderId: "176304919614",
    appId: "1:176304919614:web:a63bd2f340c849761c6d6f",
    measurementId: "G-H23DGGYE5P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}
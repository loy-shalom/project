const firebaseConfig = {

    apiKey: "AIzaSyCamz41pPjqAZ9pVojLTOqMYxYIaIk_HHM",
  
    authDomain: "project-342d5.firebaseapp.com",
  
    databaseURL: "https://project-342d5-default-rtdb.firebaseio.com",
  
    projectId: "project-342d5",
  
    storageBucket: "project-342d5.appspot.com",
  
    messagingSenderId: "702034935055",
  
    appId: "1:702034935055:web:239582525ad3536c44d27a"
  
  };
  
  
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
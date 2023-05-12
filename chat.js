// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAzZCOTzK-NbuOVueg7uCauFRi1Y2niAnw",
    authDomain: "whatssdown-c5a79.firebaseapp.com",
    databaseURL: "https://whatssdown-c5a79-default-rtdb.firebaseio.com",
    projectId: "whatssdown-c5a79",
    storageBucket: "whatssdown-c5a79.appspot.com",
    messagingSenderId: "233386231087",
    appId: "1:233386231087:web:b9aa3e3620f1a7238d4dda"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




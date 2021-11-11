const firebaseConfig = {
    apiKey: "AIzaSyDVcjEn3NGcFee7RxgtZji4fUaRAU6m8ic",
    authDomain: "plant-social-c1736.firebaseapp.com",
    databaseURL: "https://plant-social-c1736-default-rtdb.firebaseio.com",
    projectId: "plant-social-c1736",
    storageBucket: "plant-social-c1736.appspot.com",
    messagingSenderId: "933334979184",
    appId: "1:933334979184:web:a8012c83fb78983d1cdab5"
  };
  
  
 firebase.initializeApp(firebaseConfig);
  
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name-"+Room_names);
   row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
   });
});
}
getData();

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
   purpose:"adding room name"
});

localStorage.setItem("room_name" ,room_name);
window.location="chat_page.html";
}

function redirectToRoomName(){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location="chat_page.html";
}

function logout(){
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
   window.location="index.html";
}
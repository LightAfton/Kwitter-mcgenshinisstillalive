
var firebaseConfig = {
      apiKey: "AIzaSyCLZquJeZ6uTDGPn96tlzU3nnbcSQiAKa4",
      authDomain: "kwitter-be3e9.firebaseapp.com",
      databaseURL: "https://kwitter-be3e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-be3e9",
      storageBucket: "kwitter-be3e9.appspot.com",
      messagingSenderId: "773532506944",
      appId: "1:773532506944:web:1131fa13cc31e67eaeb8a5"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     username=localStorage.getItem("username");
     document.getElementById("username"),innerHTML="welcome"+username+"!";
     function add_room()
     {
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
           purpose:"adding_room_name" 
           });
           localStorage.setItem("room_name", room_name);
           window.location="kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name-"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoRoomname(this.id)'>#"+ Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoRoomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
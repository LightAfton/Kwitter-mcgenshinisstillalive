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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
messagewithtag="<h4 class='message_h4'>"+message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id).'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button>";
row=namewithtag+messagewithtag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row; 

      } });  }); }
getData();
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:username,
      message:msg,
      like:0      
      });
      document.getElementById("msg").value="";
}
function updatelike(message_id)
{
      console.log("click turn on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatelike=Number(likes)+1;
      console.log(updatelike);
      firebase.database().ref(room_name).child(message_id).update({
            like:updatelike
      });
}
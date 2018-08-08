  var config = {
    apiKey: "AIzaSyDujLZpXosVc-ikxxLf0l6ykLjbrqO2lCQ",
    authDomain: "miprimerapp-66f05.firebaseapp.com",
    databaseURL: "https://miprimerapp-66f05.firebaseio.com",
    projectId: "miprimerapp-66f05",
    storageBucket: "miprimerapp-66f05.appspot.com",
    messagingSenderId: "804384469147"
  };
  firebase.initializeApp(config);

var chicas = firebase.database().ref('registrados/');

chicas.on('child_added', function(data) {
  var nombre = data.val().name;
  var curso = data.val().course;
  var correo = data.val().mail;
 

  $('#lista').prepend('<tr><td>' + nombre + '</td><td> ' + curso + '</td><td> ' + correo + '</td></tr>' );
});






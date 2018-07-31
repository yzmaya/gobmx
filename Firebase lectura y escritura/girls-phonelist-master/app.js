  var config = {
    apiKey: "AIzaSyDujLZpXosVc-ikxxLf0l6ykLjbrqO2lCQ",
    authDomain: "miprimerapp-66f05.firebaseapp.com",
    databaseURL: "https://miprimerapp-66f05.firebaseio.com",
    projectId: "miprimerapp-66f05",
    storageBucket: "miprimerapp-66f05.appspot.com",
    messagingSenderId: "804384469147"
  };
  firebase.initializeApp(config);

var chicas = firebase.database().ref('confirmados/');



function saveNumber() {
	var name = $('#name').val();
	var number = $('#number').val();
	chicas.push({
		girl: name,
	    contact:number
	    
	});
	var name = $('#name').val('');
	var number = $('#number').val('');
}

chicas.on('child_added', function(data) {
	var numero = data.val().codigo;
	var nombre = data.val().correo;

	$('#lista').prepend('<p> ❤️ ' + nombre + ': ' + numero + '</p>' );
});






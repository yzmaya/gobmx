 var config = {
    apiKey: "AIzaSyDujLZpXosVc-ikxxLf0l6ykLjbrqO2lCQ",
    authDomain: "miprimerapp-66f05.firebaseapp.com",
    databaseURL: "https://miprimerapp-66f05.firebaseio.com",
    projectId: "miprimerapp-66f05",
    storageBucket: "miprimerapp-66f05.appspot.com",
    messagingSenderId: "804384469147"
  };
  firebase.initializeApp(config);


var ENT = firebase.database().ref('conecta/');


/*
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

*/
ENT.on('child_added', function(data) {
  var entidad = data.key;
  var ajua = 'abc';
  $('#lista').append('<option>'  + entidad + '</option>' );
  

});

 


 function test(){

alert($(this).val());
};


$(document).ready(function(){
  $("#lista").change(function(){
              var raiz = $('#lista').val();
        var db_sub = firebase.database().ref('conecta/' + raiz  + '/');
         $('#lista2').html('');
       
           
       
             db_sub.on('child_added', function(data) {

            var subsistema = data.key;
            $('#lista2').append('<option>'  + subsistema + '</option>' );
            });            
        });
});

          

$(document).ready(function(){



     $("#lista2").change(function(){
        var raiz = $('#lista').val();
        var raiz2 = $('#lista2').val();
        var db_sub2 = firebase.database().ref('conecta/' + raiz  + '/' + raiz2 + '/');
         $('#lista3').html('');

        db_sub2.on('child_added', function(data) {
            var cct = data.key;
            $('#lista3').append('<option>'  + cct + '</option>' );
            }); 

    });
});

  function getValue(sString){
localStorage.setItem("Nombre", sString); 
var nombre = localStorage.getItem("Nombre");
document.getElementById("nombre").innerHTML = nombre;
$("#cursito").val(nombre);

};



  
/*
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1;
var yyyy = hoy.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

hoy = dd+'/'+mm+'/'+yyyy;
console.log(hoy);

if(dd > 28){
  console.log('es un dia mayor a 28')
}else{
   console.log('es un dia menor a ')
}*/

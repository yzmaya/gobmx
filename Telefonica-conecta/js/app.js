  $(document).ready(function(){
  const config = {
    apiKey: "AIzaSyDujLZpXosVc-ikxxLf0l6ykLjbrqO2lCQ",
    authDomain: "miprimerapp-66f05.firebaseapp.com",
    databaseURL: "https://miprimerapp-66f05.firebaseio.com",
    projectId: "miprimerapp-66f05",
    storageBucket: "miprimerapp-66f05.appspot.com",
    messagingSenderId: "804384469147"
  };
  firebase.initializeApp(config);

   // Initialize Firebase

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

//se llena entidad por medio de append
ENT.on('child_added', function(data) {
  var entidad = data.key;
  var ajua = 'abc';
  $('#lista').append('<option>'  + entidad + '</option>' );
  

});


// selecciona entidad y se desblquea subsistema
  $("#lista").change(function(){
              var raiz = $('#lista').val();
        var db_sub = firebase.database().ref('conecta/' + raiz  + '/');
         $('#lista2').html('');
       
           
       
             db_sub.on('child_added', function(data) {

            var subsistema = data.key;
            $('#lista2').append('<option>'  + subsistema + '</option>' );
            });            
        });


// selecciona subsistema y se desblquea cct
          
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

     

 $("#registrado").click(function(){

var campo1 = $("#cursito").val();
  var redireccion;
      switch (campo1) { 
        case 'Analítica Web': 
          redireccion = 'https://miriadax.net/web/analitica-web-2-edicion-';
          break;
        case 'Gestión de Proyectos con metodologías ágiles y enfoques Lean': 
          redireccion = 'https://miriadax.net/web/gestion-de-proyectos-con-metodologias-agiles-y-enfoques-lean-4-edicion-';
          break;
        case 'Estrategia de posicionamiento digital (Growth Hacking)': 
          redireccion = 'https://miriadax.net/web/growth-hacking-3-edicion-';
          break;    
        case 'Habilidades para el Empleo': 
          redireccion = 'https://miriadax.net/web/habilidades-para-el-empleo-marca-la-diferencia-en-tu-carrera-profesional-4-edicion-';
          break;
        case 'Emprendimiento Social':
          redireccion = 'https://miriadax.net/web/emprendimiento-socialpon-tu-proyecto-en-marcha-6-edicion-/inicio';
          break;
        default:
        console.log('que?');
      };

    
    var campo2 = $("#CAMPO2").val();
    var campo3 = $("#CAMPO3").val();
    var campo4 = $("#CAMPO4").val();
    var campo5 = $("#lista").val();
    var campo6 = $("#lista2").val();
    var campo7 = $("#lista3").val();
    var campo8 = $("#CAMPO5").val();
    var campo9 = $("#CAMPO6").val();
  
    


  if(campo2, campo3, campo4, campo5, campo6, campo7, campo8, campo9  == ''){

  }else{
    var user_register = firebase.database().ref('registrados/');
    //se agregan los datos
   user_register.push({
    course: campo1,
    name: campo2,
    mail: campo3,
    curp: campo4,
    entity: campo5,
    subsystem: campo6,
    c_c_t: campo7,
    semestre: campo8,
    carreer: campo9
      
  });

    console.log(redireccion);
    
    window.open(redireccion, '_blank');
    
  }
  
});

  
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
});
$( document ).ready(function() {
    var token = Cookies.get('token');
    var remember = Cookies.get('remember');
    // validar si token existe si existe enviar un post con el token para validar si esta en la base
    //si no esta en la base boorar el token y recargar
    //si esta en la base mandar a usuarios
    //si no hay token no hacer nada
});

$("#rememberMe").change(function() {
    if(this.checked) {
        $(this).val(1)
    }else{
        $(this).val(0)
    }
});

// Attach a submit handler to the form
$( "#signinForm" ).submit(function( event ) {

// Stop form from submitting normally
event.preventDefault();

// Get some values from elements on the page:
var $form = $( this ),
    username = $form.find( "input[id='inputUsername']" ).val();
    password = $form.find( "input[id='inputPassword']" ).val();
    remember = $form.find( "input[id='rememberMe']" ).val();
    url = $form.attr( "action" );

// Send the data using post
var posting = $.post( url, { username: username, password : password, remember : remember }, function(result) {
    console.log(result);
    Cookies.set('token', result);
    Cookies.set('remember', $("#rememberMe").val());
    window.location.href="users";
}).fail(function() {
    alert( "Incorrect Password" );
  });
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

});
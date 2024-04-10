document.addEventListener('DOMContentLoaded', function() {
  function validateForm() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;

    if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '') {
      document.getElementById('error-message').style.display = 'block';
      document.getElementById('success-message').style.display = 'none';
      return false;
    } else {
      document.getElementById('error-message').style.display = 'none';
      document.getElementById('success-message').style.display = 'block';
      document.getElementById('mensaje').style.display = 'none';

      // Mostrar datos ingresados
      document.getElementById('nombre-datos').innerText = nombre;
      document.getElementById('email-datos').innerText = email;
      document.getElementById('telefono-datos').innerText = telefono;
      document.getElementById('tipo-entrada-datos').innerText = document.getElementById('entrada').value;
      document.getElementById('datos-ingresados').style.display = 'block';

      return true;
    }
  }

  var form = document.getElementById('registro-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
});
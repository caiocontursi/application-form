function validarEmail() {
  var email = document.querySelector('#email');
  var error = document.querySelector('#error-email');

  if(!email.checkValidity()) {
    error.innerHTML = "Email invalido"
  }
}

function redefinir() {
  var error = document.querySelector('#error-email')
  if (error.innerHTML == "Email inválido") {
    error.innerHTML = "";
  }
}

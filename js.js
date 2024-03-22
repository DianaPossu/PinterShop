function validateName(value) {
  return /^[A-Za-z]+$/.test(value);
}

function validateNumber(value) {
  return /^\d+$/.test(value);
}

document.addEventListener('DOMContentLoaded', function() {
  const nombreInput = document.getElementById('nombre');
  const apellidoInput = document.getElementById('apellido');
  const cedulaInput = document.getElementById('cedula');

  function displayErrorMessage(element, message) {
    element.textContent = message;
  }

  function establecerMarcadorPosicion(input) {
    if (input.value.trim()) {
      input.nextElementSibling.style.display = 'none';
    } else {
      input.nextElementSibling.style.display = 'block';
    }
  }

  nombreInput.addEventListener('input', function() {
    const nombreError = document.getElementById('nombreError');
    nombreError.textContent = '';
    if (!validateName(nombreInput.value.trim())) {
      displayErrorMessage(nombreError, 'Nombre no válido (solo letras)');
    }
    establecerMarcadorPosicion(nombreInput);
  });

  apellidoInput.addEventListener('input', function() {
    const apellidoError = document.getElementById('apellidoError');
    apellidoError.textContent = '';
    if (!validateName(apellidoInput.value.trim())) {
      displayErrorMessage(apellidoError, 'Apellido no válido (solo letras)');
    }
    establecerMarcadorPosicion(apellidoInput);
  });

  cedulaInput.addEventListener('input', function() {
    const cedulaError = document.getElementById('cedulaError');
    cedulaError.textContent = '';
    if (!validateNumber(cedulaInput.value.trim())) {
      displayErrorMessage(cedulaError, 'Cédula no válida (solo números)');
    }
    establecerMarcadorPosicion(cedulaInput);
  });

  establecerMarcadorPosicion(nombreInput);
  establecerMarcadorPosicion(apellidoInput);
  establecerMarcadorPosicion(cedulaInput);
});

document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const cedula = document.getElementById('cedula').value.trim();
  const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();

  const errors = [];

  if (!nombre || !apellido || !cedula) {
    alert('Todos los campos son obligatorios.');
    return;
  }

  if (!validateName(nombre)) {
    errors.push('nombre');
  }

  if (!validateName(apellido)) {
    errors.push('apellido');
  }

  if (!validateNumber(cedula)) {
    errors.push('cedula');
  }

  // errores
  errors.forEach(function(error) {
    const errorElement = document.getElementById(error + 'Error');
    errorElement.textContent = 'Campo requerido';
  });

  
  if (errors.length === 0) {
    alert('¡Formulario válido! Puedes continuar con el proceso.');
  }
});

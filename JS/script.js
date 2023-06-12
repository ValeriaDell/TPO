function validate(input) {

    var validityState_object = input.validity;
  
    console.log(validityState_object)
  
    if (validityState_object.typeMismatch) {
      input.setCustomValidity('Esto no parece ser una dirección de correo electrónico. Por favor revisalo');
      input.reportValidity();
    } else {
      input.setCustomValidity('');
      input.reportValidity();
    }
  }
  
  document.querySelector('#email').addEventListener('blur', e =>
    validate(e.target)
  )
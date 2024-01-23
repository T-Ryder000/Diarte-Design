export default function formulario(){

  let email =document.querySelector('#InputEmail').value
  let whatsapp = document.querySelector('#inputWhatsapp').value

  function validarFormulario(){

    if(email === '' || whatsapp === '' ){
      alert('Por favor, preencha todos os campos.');

      return false
    }

    return true
  }
}
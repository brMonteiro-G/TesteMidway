

function validarEmail() {
    var email = document.querySelector('#inputEmail');
    var error = document.querySelector('#error-email');

    if (!email.checkValidity()) {
        error.innerHTML = "Email invalido";
    }

}

function msgEmail() {
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Email invalido") {
        error.innerHTML = "";
    }
}











const fields = document.querySelectorAll("[required]")
//console.log(fields)





function customValidation(event) {
    const field = event.target

    //eliminar bubble
    event.preventDefault()

    //lgc para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for (let error in field.validity) {
            //se n for custom error então verifica se tem erro 
            if ( field.validity[error]) {
                foundError = error
            }
        }

        return foundError;
    }

    const error = verifyErrors()
    console.log("Error exists:", error)

    const spanError = field.parentNode.querySelector("#error1")

  if(error){
    
    spanError.classList.add("active")
    spanError.innerHTML = "Campo obrigatório"

  }else{
    spanError.classList.remove("active")
    spanError.innerHTML = ""
  }

}

for (field of fields) {
    field.addEventListener("invalid", customValidation)
}



//Mensagem personalizada
  // if (error) {
    //     //trocar msg de required
    //     field.setCustomValidity("Esse campo é obrigatório")

    // } else {
    //     field.setCustomValidity("")
    // }
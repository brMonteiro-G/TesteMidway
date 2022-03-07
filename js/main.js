

//procura todas as tags que contém required e coloca em fields 
const fields = document.querySelectorAll("[required]")
// console.log(fields)


function validateField(field) {
    // lógica para verificar se existem erros 
    function verifyErrors() {

        let foundError = false;

        for (let error in field.validity) {
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }

        console.log(foundError)
        return foundError;
    }

    function customMessage(typeError){
        const messages = {
            text:{
                valueMissing:"Por favor, preencha este campo",
                patternMismatch: "Formato inválido"
            },
            email:{
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, insira um email válido"
            },
            
        }
        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")
        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {

            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function () {

        const error = verifyErrors()
        if (verifyErrors()) {
            const message = customMessage(error)
            field.style.borderColor="red"
            setCustomMessage(message)
        } else {
            field.style.borderColor="green"
            setCustomMessage()
        }
    }
}

function customValidation(event) {



    const field = event.target
    //validation se torna uma função anônima 
    const validation = validateField(field)


    validation()

    // const error = validateField(field)
    // console.log("Error exists: ", error)


}

for (let field of fields) {
    field.addEventListener("invalid", event => {

        //eliminar o bubble
        event.preventDefault()
        customValidation(event)
    })
    field.addEventListener("blur", customValidation)


}


document.querySelector("form").addEventListener("submit", event => {
    console.log("enviar formulário")

    //não vai enviar o formulário
    event.preventDefault()
})
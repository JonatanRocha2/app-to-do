import { login } from "../services/user-service.js"
import { validarFormulario } from "./utils.js"

const camposObrigatorios = document.querySelectorAll('[required]')

for(let campo of camposObrigatorios){
    campo.addEventListener('invalid', event => {
        event.preventDefault()

        validarFormulario(event)
    })
    campo.addEventListener('blur', validarFormulario)
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()

    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value

    login(email, password)
})
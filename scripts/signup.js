import { cadastro } from "../services/user-service.js"
import { validarFormulario } from "/scripts/utils.js"

const camposObrigatorios = document.querySelectorAll('[required]')

// console.log(camposObrigatorios)

for(let campo of camposObrigatorios){
    campo.addEventListener('invalid', event => {
        event.preventDefault()

        validarFormulario(event)
    })
    campo.addEventListener('blur', validarFormulario)   
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()

    const nome = document.getElementById('nome').value.trim()
    const sobrenome = document.getElementById('sobrenome').value.trim()
    const email = document.getElementById('email').value.trim()
    const senha = document.getElementById('senha').value.trim()
    const repetirSenha = document.getElementById('repetirSenha').value.trim()

        // console.log(
        //     nome, sobrenome, email, senha, repetirSenha
        // )

    //validar se senhas sao iguais

    if(senha == repetirSenha) {
        const user = {
            'firstName': `${nome}`,
            'lastName': `${sobrenome}`,
            'email': `${email}`,
            'password': `${senha}`
        }
        cadastro(user)
    }
    else {
        toastr.error('As senhas nao sao iguais!')
    }
})
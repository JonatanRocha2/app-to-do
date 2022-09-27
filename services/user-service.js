import { urlBase2 } from "./base-url-service.js"
import { getToken, setToken } from "./storage-service.js"

let minhaHeader = new Headers()
minhaHeader.append("Content-Type", "application/json")


function login(email, password){

    const dados = JSON.stringify({
        "email": `${email}`,
        "password": `${password}`
    })

    const requisicao = {
        method: 'POST',
        headers: minhaHeader,
        body: dados
    }

    fetch(`${urlBase2}/users/login`, requisicao)
    .then(response => {
        if(response.ok) {   
            response.json()
            .then(result => {
                setToken(result.jwt)
                location.href = '../tarefas.html'   
            })
        }
        else {
            response.json()
            .then(result => {
                toastr.error(result)
            })
        }
    })
}

function cadastro(user){
    
    const requisicao = {
        method: 'POST',
        headers: minhaHeader,
        body: JSON.stringify(user)
    }

    fetch(`${urlBase2}/users`, requisicao)
    .then(response => {
        if(response.ok) {
            response.json()
            .then(result => {
                toastr.success('Cadastro realizado com sucesso')
                setTimeout(() => {
                    location.href = '../index.html'
                }, 2000)
            })
        }
        else {
            response.json()
            .then(result => {
                toastr.error(result)
            })
        }
    })
}

async function getUser(){

    return new Promise(resolve => { 
        minhaHeader.append('authorization', getToken())

    const requisicao = {
        method: 'GET',
        headers: minhaHeader
    }

    console.log(requisicao)

        fetch(`${urlBase2}/users/getMe`, requisicao)
        .then(response => {
            if(response.ok) {
                response.json()
                .then(result => {
                    resolve(result)
                })
            }
            else {
                resolve(null)
            }
        })
    })
}

// function sair(){
//     deleteToken()
//     location.href = '../index.html'
// }

export { login, cadastro, getUser }
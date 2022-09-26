import { urlBase2, urlCreateUser, urlGetMe, urlLogin } from "./base-url-service.js"
import { deleteToken, getToken, setToken } from "/services/storage-service.js"

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

async function getUser(user){

    return new Promise(resolve => {
        minhaHeader.append('authorization', getToken())

    const requisicao = {
        method: 'GET',
        headers: minhaHeader
    }

        fetch(`${urlGetMe}`, requisicao)
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

function sair(){
    deleteToken()
    location.href = '../index.html'
}

export { login, cadastro, getUser, sair }
import { urlTask } from "./base-url-service.js"
import { getToken } from "/services/storage-service.js"

let minhaHeader = new Headers()
minhaHeader.append('Content-Type', 'application/json')
minhaHeader.append('authorization', getToken())

async function pegarTarefas(){
    return new Promise(resolve => {
        const requisicao = {
            method: 'GET',
            headers: minhaHeader
        }
        fetch(`${urlTask}`, requisicao)
        .then(response => {
            if(response.ok){
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

async function novaTarefa(descricao){
    return new Promise(resolve => {
        
        const dados = {
            descricao: descricao,
            completo: false
        }

        const requisicao = {
            method: 'POST',
            headers: minhaHeader,
            body: JSON.stringify(dados)
        }

        fetch(`${urlTask}`, requisicao)
        .then(response => {
            if(response.ok){
                response.json()
                .then(result => {
                    resolve(result)
                })
            }
            else {
                response.json()
                .then(result => {
                    toastr.error(result)
                    result(null)
                })
            }
        })
    })
}

export { pegarTarefas, novaTarefa }
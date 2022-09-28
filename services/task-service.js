import { urlBase2 } from "./base-url-service.js"
import { getToken } from "./storage-service.js"

let minhaHeader = new Headers()
minhaHeader.append('Content-Type', 'application/json')
minhaHeader.append('authorization', getToken())

async function pegarTarefas(){
    return new Promise(resolve => {
        const requisicao = {
            method: 'GET',
            headers: minhaHeader
        }
        fetch(`${urlBase2}/tasks`, requisicao)
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
            description: descricao,
            completed: false
        }

        const requisicao = {
            method: 'POST',
            headers: minhaHeader,
            body: JSON.stringify(dados)
        }

        fetch(`${urlBase2}/tasks`, requisicao)
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
                    resolve(null)
                })
            }
        })
    })
}

async function concluirTarefa(descricao, idTask){
    return new Promise(resolve => {

        const dados = {
            description: descricao,
            completed: true
        }

        const requisicao = {
            method: 'PUT',
            headers: minhaHeader,
            body: JSON.stringify(dados)
        }

        fetch(`${urlBase2}/tasks/${idTask}`, requisicao)
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
                    resolve(null)
                })
            }
        })
    })
}

async function excluirTarefa(idTask){
    return new Promise(resolve => {

        const requisicao = {
            method: 'DELETE',
            headers: minhaHeader
        }

        fetch(`${urlBase2}/tasks/${idTask}`, requisicao)
        .then(response => {
            response.json()
            .then(del => {
                if(response.ok){
                    toastr.success('Tarefa deletada com sucesso.')
                }
                else {
                    toastr.error('Tarefa não encontrada.')
                }
            })
        })
    })
}

export { pegarTarefas, novaTarefa, excluirTarefa, concluirTarefa }
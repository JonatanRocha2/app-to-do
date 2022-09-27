import { getUser } from "../services/user-service.js"
import { novaTarefa, pegarTarefas } from "../services/task-service.js"

let tarefas = undefined


// gerenciar usuarios
const usuario = await getUser()
if(usuario){
    // setar nome de usuario
    const nomeCompletoUsuario = document.getElementById('userName')
    // console.log(nomeCompletoUsuario)
    nomeCompletoUsuario.innerHTML = usuario.firstName + ' ' + usuario.lastName

    //pegar tarefa
    tarefas = await pegarTarefas()
    tarefas.reverse()
    mostrarTarefa()
}
// else {
//     sair()
// }

// adicionar nova tarefa

document.querySelector('form').addEventListener('submit', async event => {
    event.preventDefault()

    const descricaoDaTarefa = document.getElementById('novaTarefa')

    // console.log(descricaoDaTarefa)

    // prevenir que tarefa em branco nao seja criada
    if(descricaoDaTarefa.value.length !== 0){
        const tarefaCriada = await novaTarefa(descricaoDaTarefa.value.trim())
        if (tarefaCriada) {
            toastr.success('Nova tarefa criada com sucesso')
            descricaoDaTarefa.value = ''
            tarefas.unshift(tarefaCriada)
            mostrarTarefa()
        }
    }
    else {
        toastr.error('Não é possível criar uma tarefa vazia!')
    }
})

// mostrar tarefas criadas

function mostrarTarefa(){
    const mostrarTarefaPendente = document.querySelector('.tarefas-pendentes')

    // console.log(mostrarTarefaPendente)

    const tarefaPendente = tarefas.filter(tarefa => tarefa.completed == false)
    let tarefaPendenteHTML = ''

    console.log(tarefaPendente)

    for(let tarefa of tarefaPendente){
        tarefaPendenteHTML += `
        <li class="tarefa" id="${tarefa.id}">
        <div class="not-done"></div>
        <div class="descricao">
          <p class="nome">${tarefa.description}</p>
          <p class="timestamp">Criada em: ${tarefa.createdAt}</p>
        </div>
      </li>`
    }
    mostrarTarefaPendente.innerHTML = tarefaPendenteHTML

    console.log(mostrarTarefaPendente)
}

// encerrar sessão

// const botaoSair = document.getElementById('closeApp')
// botaoSair.addEventListener('click', event => {
//     event.preventDefault()
//     sair()

//     // console.log(botaoSair)
// })

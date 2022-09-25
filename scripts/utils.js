function validarCampo(dados) {

    function verificaErros() {
        let erroEncontrado = false

        for(let erro in dados.validity) {
            if(dados.validity[erro] && !dados.validity.valid) {
                erroEncontrado = erro
            }
        }
        return erroEncontrado
    }

    function mensagensDeErro(tipoDoErro){
        const mensagens = {
            text: 'Por favor, preencha este campo!',
            email: 'Por favor, insira um email!',
            senha: 'Por favor, insira uma senha!'
        }
        return mensagens[dados.type][tipoDoErro]
    }

    function enviarMensagem(mensagem){
        const spanErro = dados.parentNode.querySelector('span.error')

        if(mensagem){
            spanErro.classList.add('active')
            spanErro.innerHTML = mensagem
        }
        else {
            spanErro.classList.add('active')
            spanErro.innerHTML = ''
        }
    }

    return function() {
        const erro = verificaErros()

        if(erro){
            const mensagem = mensagensDeErro(erro)
            dados.style.borderColor = 'red' 
            enviarMensagem(mensagem)
        }
        else {
            dados.style.borderColor = 'green'
            enviarMensagem()
        }
    }
}

function validarFormulario(event){
    const campo = event.target
    const validacao = validarCampo(campo)
    validacao()
}

export {
    validarFormulario
}
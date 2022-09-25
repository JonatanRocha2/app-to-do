
# Segundo checkpoint de Front-End II

## App To-Do

#### Este projeto consiste em um pequeno aplicativo de gerenciamento de tarefas, dentro do qual podemos realizar as seguintes atividades:

1. Ver tarefas pendentes.
2. Ver tarefas terminadas.
3. Marcar uma tarefa como terminada.
4. Criar tarefas novas.
5. Visualizar a data de criação de uma tarefa.
6. Remover tarefas.
7. Além do citado acima, implementaremos um sistema de autenticação de usuários, que inclui o processo de registro e login.
8. Cada tela terá sua responsabilidade e funcionalidade. A seguir, falaremos um pouco do que cada tela irá fazer no final do projeto.


#### Na tela do login, deve-se desbloquear o botão de login  quando os campos estão preenchidos e o campo de email está validado. Também terá um hiperlink para o usuário ir para a tela de SignUp.


#### Na tela de SignUp, como o nome já diz, o usuário deve preencher os dados da sua conta. Campos de Nome e Sobrenome não devem estar vazios e o campo de email deve conter um email válido para que o formulário não apresente erros e a operação seja concluída com sucesso.


#### Ao logar, o usuário verá a tela de tarefas. No topo desta tela, deverá ser carregado o nome do usuário logado e também um botão para o logout. Também terá um campo que não pode estar vazio e terá uma quantidade mínima de 5 caracteres, onde a tarefa será descrita. Esses dados da tarefa serão enviados para uma api quando o botão for clicado. O retorno dessa api será exibido nos blocos de Tarefas Pendentes e Tarefas Terminadas. 


#### Note que as tarefas pendentes poderão ser finalizadas ao clicar no botão roxo à esquerda e as tarefas terminadas podem ser colocadas novamente como pendentes ao clicar no ícone de seta em semicírculo e excluídas ao clicar no ícone da lixeira no canto direito.
Nas aulas finais, essas telas receberão algumas melhorias na qualidade da experiência do usuário como skeleton na hora de carregar as tarefas vindas da API e um ícone de Loading enquanto ocorre o processo de login e de cadastro do usuário.

#### Por fim teremos uma aplicação completa que conta com Login, Sign Up, Listagem de tarefas, criação e exclusão de tarefas. Novamente, fique tranquilo, pois esses requisitos serão feitos passo a passo durante as mesas de trabalho.




## API Reference

```
https://ctd-todo-api.herokuapp.com/
```

#### Get user

```
https://ctd-todo-api.herokuapp.com/v1/users/getMe
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body`    | `object` | **Required**. Your API key |

#### Get task

```
https://ctd-todo-api.herokuapp.com/v1/tasks
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `authorization`      | `string` | **Required**. JWT |




## Authors

- [@JonatanRocha2](https://github.com/JonatanRocha2)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Documentation

[TODOs API](https://ctd-todo-api.herokuapp.com/)

[Módulos JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules#um_background_em_m%C3%B3dulos)


## Run Locally

Clone the project

```bash
  git clone https://github.com/JonatanRocha2/app-to-do.git
```

Go to the project directory

```bash
  cd app-to-do
```

Install dependencies

```bash
  npm install --save toatsr
```


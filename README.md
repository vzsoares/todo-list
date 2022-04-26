# Projeto Todo List

<p align="center">
<a href='https://vzsoares.github.io/todo-list/' target="_blank">
Live Demo
</a>
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/86134825/164337008-825d69cb-6390-4b68-92fd-5294d3457f3d.png" width="500px">
</p>

> Projeto indicado e feito sob monitoria da organização [Podcodar](https://github.com/podcodar) com o intuito de aprimorar os conhecimentos de :
>
> - Git
> - DevOps
> - Typescript
> - React

## A Tarefa :

Para esse projeto foi requisitado aos participantes que fizessem uma Todo list (lista de tarefas) em **React** utilizando uma linguagem fortemente tipada, o **typescript** tornando a aplicação mais previsível durante seu desenvolvimento.
Contendo também as funcionalidades de :

- adicionar
- remover
- editar
- filtrar

As funcionalidades também deveriam ser feitas uma a uma e antes de ir para a proxima o estudante deveria fazer um Pull Request e aguardar a aprovação de um mentor e de algum colega.

---

## O Desenvolvimento :

Como mencionado acima o projeto deveria ser feito dividido em etapas , pessoalmente decidi dividir entre adicionar , remover , editar , filtrar e por fim implementar context.

A seguir,uma breve descrição de cada tarefa:

### Adicionar tarefas:

Para implementar essa funcionalidade optei por criar uma lista de objetos , nos quais os mesmos conteriam as propriedades de `task:`(tarefa do usuário) , `completed:`(boolean para sabermos se a tarefa ja fora concluída) e `id:`(id único para podermos manejar a lista) , dessa forma bastou então criar uma função que recebia a task criava um id e adicionava a lista.

### Remover tarefas

Como ja temos um id foi necessário apenas criar uma função que filtrava a lista usando o id da task.

### Editar tarefas

Para editar as tarefas já foi necessário a criação de duas funções uma para editar a tarefa e outra para começar a edição , também uma variável necessária principalmente para fazer comparações lógicas alterando assim a funcionalidade dos botões da interface.

### Filtrar tarefas

Para filtrar as tarefas da interface sem alterar a lista original bastou apenas criar uma copia da lista original filtrar-la e alterar as condições de filtro conforme necessário.

### Implementar context

Devido a grande quantidade de props ao longo da aplicação foi decidido utilizar contextAPI e após toda a lógica funcionando , a implementação do context foi rápida ajudou no problema de "prop drilling", resumindo boa parte das funções e variáveis em um arquivo exclusivo para o context e passando-as através de um provider e useContext ao longo da aplicação.

---

## Melhorias Futuras:

Algumas possíveis melhorias seriam:

- implementação de tipos de tarefas como: importantes , inspiração , ...etc .

- armazenar os dados da lista possibilitando seu uso a longo prazo

- sistema de autenticação em conjunto ao banco de dados

---

## Explore Localmente :

Para explorar o código localmente você precisa:

- node
- yarn

```bash
# instalar dependências do projeto
yarn install

# Inicializa build de desenvolvedor
yarn dev
```

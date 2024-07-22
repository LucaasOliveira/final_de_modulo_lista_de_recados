# Lista de Recados

Este projeto é uma aplicação de lista de recados utilizando Express e Node.js. Permite o registro de usuários, login e gerenciamento de mensagens.

## Funcionalidades

- **Cadastro de Usuário:** Permite criar uma nova conta.
- **Login de Usuário:** Permite que um usuário faça login.
- **Criação de Mensagens:** Permite criar novas mensagens associadas a um usuário.
- **Visualização de Mensagens:** Permite visualizar todas as mensagens de um usuário.
- **Atualização de Mensagens:** Permite atualizar mensagens existentes.
- **Deleção de Mensagens:** Permite deletar mensagens.

## Tecnologias Utilizadas

- Node.js
- Express
- UUID

## Configuração do Ambiente

1. Clone o repositório:
    ```bash
    git clone https://github.com/LucaasOliveira/final_de_modulo_lista_de_recados
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd final_de_modulo_lista_de_recados
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
    O servidor estará rodando na porta `8080`.

## Endpoints da API

### Usuários

- **POST** `/users/signup`
    - **Descrição:** Cria um novo usuário.
    - **Corpo da Requisição:**
    ```json
    {
      "name": "Nome do Usuário",
      "email": "email@exemplo.com",
      "password": "senha"
    }
    ```

- **POST** `/users/login`
    - **Descrição:** Realiza o login de um usuário.
    - **Corpo da Requisição:**
    ```json
    {
      "email": "email@exemplo.com",
      "password": "senha"
    }
    ```

### Mensagens

- **POST** `/messages/:email`
    - **Descrição:** Cria uma nova mensagem.
    - **Corpo da Requisição:**
    ```json
    {
      "title": "Título da Mensagem",
      "description": "Descrição da Mensagem"
    }
    ```

- **GET** `/messages/:email`
    - **Descrição:** Obtém todas as mensagens para um usuário específico.

- **PUT** `/messages/:id`
    - **Descrição:** Atualiza uma mensagem existente.
    - **Corpo da Requisição:**
    ```json
    {
      "title": "Título Atualizado",
      "description": "Descrição Atualizada"
    }
    ```

- **DELETE** `/messages/:id`
    - **Descrição:** Deleta uma mensagem existente.

## Contribuições

Contribuições são bem-vindas! Por favor, envie um pull request ou abra uma issue para sugestões e melhorias.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

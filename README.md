# Projeto de Fábrica de Software

Este é um projeto da faculdade desenvolvido com Node.js, Express.js e Prisma.
Este README fornece todas as informações necessárias para configurar e executar o projeto em seu ambiente local.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha as seguintes ferramentas instaladas em seu sistema:

- [Node.js](https://nodejs.org/) (versão recomendada: [inserir versão aqui])
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [PostgreSQL](https://www.postgresql.org/) (banco de dados)

## Configuração do Banco de Dados

1. Crie um banco de dados PostgreSQL para o projeto.

2. Copie o arquivo `.env.example` para um novo arquivo chamado `.env` e configure as variáveis de ambiente necessárias:

   ```
   DATABASE_URL=postgresql://seu_usuario:senha@localhost:5432/seu_banco_de_dados
   ```

   Substitua `seu_usuario`, `senha` e `seu_banco_de_dados` pelas informações do seu banco de dados.

3. Execute as migrações do Prisma para criar as tabelas do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

## Instalação

1. Clone este repositório para o seu sistema local:

   ```bash
   git clone https://github.com/EduQuiz/eduquiz-server
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd eduquiz-server
   ```

3. Instale as dependências do Node.js usando o npm:

   ```bash
   npm install
   ```

## Executando o Projeto

Agora que você configurou o banco de dados e instalou as dependências, você pode executar o projeto:

```bash
npm start
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).
Você pode acessar esta URL em seu navegador para interagir com o aplicativo.

## Estrutura do Projeto

- `prisma/`: Contém os arquivos de configuração e migrações do Prisma.
- `src/`: Contém o código-fonte principal do aplicativo.
- `src/routes/`: Define as rotas da aplicação.
- `src/controllers/`: Contém os controladores da aplicação.

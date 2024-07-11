<h1 align="center">
  <a href="#">
    <img alt="Food Explorer" src=".github/logo.svg" width="50%" />API
  </a>
</h1>

<p align="center">
  <a href="#memo-licença">
    <img alt="License" src="https://img.shields.io/static/v1?style=flat&label=license&message=MIT&color=000000">
  </a> 
  <a href="#-deploy">
    <img alt="render.com" src="https://img.shields.io/website?down_color=lightgrey&down_message=deploy&label=render&logo=render&logoColor=4AF2C3&style=flat&up_color=4AF2C3&up_message=online&url=https%3A%2F%2Ffoodexplorer-api-owmn.onrender.com%2F">
  </a> 
</p>

<p align="center">
Backend do projeto Food Explorer</p>


<p align="center">
  <a href="#-deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-frontend">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-documenta%C3%A7%C3%A3o-da-api">Documentação</a>

</p><br>

## 🚀 Deploy

O backend do projeto está hospedado na **Render.com** na url abaixo:
- [https://foodexplorer-api-owmn.onrender.com](https://foodexplorer-api-owmn.onrender.com)

Para gerar o token de autenticação utilize as credenciais abaixo na rota `/sessions`

**Administrador**:
  - login: `admin@email.com`
  - senha: `123456`

**Usuário**:
  - login: `user@email.com`
  - senha: `123456`

### 🏗️ Deploy local

1. Faça o clone do projeto em uma pasta local através do prompt de terminal:
```bash
git clone https://github.com/dsouloficial/foodexplorer-api.git
```
2. Acesse a pasta onde foi feito a cópia:
```bash
cd foodexplorer-api
```
3. Instale as dependencias do projeto:
```bash
npm install
```
4. Configure as variáveis de ambiente criando o arquivo `.env` (use o arquivo `.env.example` como modelo) incluindo as variáveis abaixo:
```js
PORT=3000
AUTH_SECRET=xxxxxxxxxxxxxxxx
```
5. Execute as `migrations`
```bash
npm run migrate
```
6. execute as `seeds`
```bash
npm run seed
```
7. Execute o servidor backend da aplicação:
```bash
npm start
```

## 🖼️ Frontend

O frontend desta aplicação encontra-se no repositório: 
- [https://github.com/dsouloficial/foodexplorer](https://github.com/dsouloficial/foodexplorer)

## 🦾 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [Express.js](http://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [SQLite](https://www.npmjs.com/package/sqlite)
- [JSON Web Token (JWT)](https://www.npmjs.com/package/jsonwebtoken)
- [Multer](https://www.npmjs.com/package/multer)
- [Knex.js](https://www.npmjs.com/package/knex)
- [BCrypt.js](https://www.npmjs.com/package/bcryptjs)

## 💻 Projeto

Este é o backend do projeto **Food Explorer**, criado como parte do desafio final do treinamento fullstack **Explorer** da [@Rockeseat](https://www.rocketseat.com.br/) para avaliar os conhecimentos adquiridos.

## 📑 Documentação da API

### Configuração Insomnia

<p>
Faça o download do arquivo de configuração do Insomnia com as requisições disponíveis na API ou importe no botão abaixo.
</p>
<p><a href="https://raw.githubusercontent.com/dsouloficial/foodexplorer-api/readme/docs/Insomnia_config.json" download >Download do Insomnia_config.json</a></p>

<p align="left">
<a href="https://insomnia.rest/run/?label=Foodexplorer%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fdam450%2Ffoodexplorer-api%2Fmain%2Fdocs%2FInsomnia_config.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## :memo: Licença

Esse projeto está sob a licença MIT.

---
## Autor  

<a href="https://github.com/dsouloficial/">
    <img alt="github dsouloficial" src="https://img.shields.io/static/v1?style=social&logo=github&label=github&message=dsouloficialcolor=4AF2C3">
</a> 


## Contatos  

  <a href="https://www.linkedin.com/in/Denilson-Bernardo/">
    <img alt="linkedin.com" src="https://img.shields.io/static/v1?style=social&logo=linkedin&label=linkedin&message=Denilson-Bernardo">
  </a> 
  <br/><br/>
  <a href="mailto:denilsonbnascimento07@gmail.com">
    <img alt="gmail.com" src="https://img.shields.io/static/v1?style=social&logo=gmail&label=gmail&message=denilsonbnascimento07@gmail.com">
  </a> 
  
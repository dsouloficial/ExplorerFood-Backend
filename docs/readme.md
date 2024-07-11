# Rotas

## Users

Resource `Users`

### Create

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | valor obrigatório|
| `email` | `string` | valor obrigatório|
| `password` | `string` | valor obrigatório|

> Formato body JSON

Request: JSON

```json
{
	"name": "Jonny",
	"email": "Johny1@email.com",
	"password": "1234"
}
```
Response:

```json
{
	"userId": 11
}

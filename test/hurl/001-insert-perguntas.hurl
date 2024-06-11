POST http://localhost:4000/criador
{
  "email": "email",
  "senha": "senha"
}
HTTP 201
[Captures]
idcriador: jsonpath "$['id']"

POST http://localhost:4000/pergunta
{
  "pergunta": "Qual é a capital da França?",
  "alternativas": [
    {
      "alternativa": "Berlim"
    },
    {
      "alternativa": "Lisboa"
    },
    {
      "alternativa": "Madri"
    },
    {
      "alternativa": "Paris",
      "correta": true
    }
  ]
}
HTTP 201
[Captures]
idpergunta1: jsonpath "$['id']"

POST http://localhost:4000/pergunta
{
  "pergunta": "Quem escreveu \"Dom Casmurro\"?",
  "alternativas": [
    {
      "alternativa": "José de Alencar"
    },
    {
      "alternativa": "Machado de Assis",
      "correta": true
    },
    {
      "alternativa": "Graciliano Ramos"
    },
    {
      "alternativa": "Jorge Amado"
    }
  ]
}
HTTP 201
[Captures]
idpergunta2: jsonpath "$['id']"

POST http://localhost:4000/pergunta
{
  "pergunta": "Qual é o elemento químico representado pelo símbolo \"O\"?",
  "alternativas": [
    {
      "alternativa": "Ouro"
    },
    {
      "alternativa": "Oxigênio",
      "correta": true
    },
    {
      "alternativa": "Osmium"
    },
    {
      "alternativa": "Ourobranco"
    }
  ]
}
HTTP 201
[Captures]
idpergunta3: jsonpath "$['id']"

POST http://localhost:4000/pergunta
{
  "pergunta": "Qual é o maior planeta do Sistema Solar?",
  "alternativas": [
    {
      "alternativa": "Terra"
    },
    {
      "alternativa": "Marte"
    },
    {
      "alternativa": "Júpiter",
      "correta": true
    },
    {
      "alternativa": "Saturno"
    }
  ]
}
HTTP 201
[Captures]
idpergunta4: jsonpath "$['id']"

POST http://localhost:4000/questionario
{
  "titulo": "Questionário",
  "perguntas": [
    "{{idpergunta1}}",
    "{{idpergunta2}}",
    "{{idpergunta3}}",
    "{{idpergunta4}}"
  ]
}
HTTP 201

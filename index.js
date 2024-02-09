const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de estilo funcional.",
        "Um tipo de café altamente energético.",
        "Uma linguagem de programação de script usada principalmente para tornar páginas da web interativas."
      ],
      correta: 2
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'querySelector' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento do DOM pelo seu ID.",
        "Seleciona um elemento do DOM pelo seu nome de classe.",
        "Seleciona um elemento do DOM pelo seletor CSS especificado."
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes é um tipo de dado em JavaScript?",
      respostas: [
        "Boolean",
        "String",
        "Todas as opções anteriores estão corretas."
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função de retorno em JavaScript?",
      respostas: [
        "Uma função que retorna sempre 'true'.",
        "Uma função que retorna um valor.",
        "Uma função que não retorna nada."
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "unshift()",
        "concat()"
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha.",
        "<!-- Este é um comentário de uma linha. -->",
        "/* Este é um comentário de uma linha. */"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        "==="
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener' faz em JavaScript?",
      respostas: [
        "Remove um evento de um elemento.",
        "Adiciona um ouvinte de evento a um elemento.",
        "Seleciona um elemento do DOM pelo seletor CSS especificado."
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()"
      ],
      correta: 0
    }
  ];
  
  const quiz= document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta 
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
   quizItem.querySelector('dl').appendChild(dt)
  } 
  
  
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem) 
  }
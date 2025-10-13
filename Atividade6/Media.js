let nome = prompt("Nome do aluno");

let nota1 = parseFloat(prompt("Nota 1"));
let nota2 = parseFloat(prompt("Nota 2"));
let nota3 = parseFloat(prompt("Nota 3"));
let nota4 = parseFloat(prompt("Nota 4"));

let media = (nota1 + nota2 + nota3 + nota4) / 4
alert("Média do aluno " + nome + ": " + media);
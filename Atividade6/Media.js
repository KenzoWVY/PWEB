let nome = prompt("Nome do aluno");

let nota1 = prompt("Nota 1");
let nota2 = prompt("Nota 2");
let nota3 = prompt("Nota 3");
let nota4 = prompt("Nota 4");

let media = (+nota1 + +nota2 + +nota3 + +nota4) / 4;
alert("Média do aluno " + nome + ": " + media);
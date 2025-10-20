let submitButton = document.getElementById("submit");

let avgAgeText = document.getElementById("avg-age");
let maxAgeText = document.getElementById("high-age");
let minAgeText = document.getElementById("low-age");
let qtdPesText = document.getElementById("qtd-pessimo");
let pctBomText = document.getElementById("pct-bom");
let qtdFemText = document.getElementById("qtd-fem");
let qtdMascText = document.getElementById("qtd-masc");
let qtdOutrosText = document.getElementById("qtd-outro");

let totalAge = 0;
let totalResponses = 0;
let maxAge = -1;
let minAge = Infinity;
let qtdPessimo = 0;
let qtdBom = 0;
let qtdFem = 0;
let qtdMasc = 0;
let qtdOutros = 0;

submitButton.addEventListener('click', function() {
    let form = document.getElementById("form");
    let formData = new FormData(form);

    let age = formData.get("idade");
    let sex = formData.get("sexo");
    let opinion = formData.get("opiniao");

    if (!age || !sex || !opinion || isNaN(age) || age <= 0) {
        alert("Algum dos campos não foi preenchido ou está inválido.");
        return;
    }

    totalAge += parseInt(age);
    totalResponses += 1;
    
    if (maxAge < age) {
        maxAge = age;
    }
    if (minAge > age) {
        minAge = age;
    }

    if (opinion === "Péssimo") {
        qtdPessimo += 1;
    } else if (opinion === "Bom" || opinion === "Ótimo") {
        qtdBom += 1;
    }

    if (sex === "Feminino") {
        qtdFem += 1;
    } else if (sex === "Masculino") {
        qtdMasc += 1;
    } else {
        qtdOutros += 1;
    }
    
    avgAgeText.textContent = "Idade média: " + (totalAge / totalResponses).toFixed(2);
    maxAgeText.textContent = "Maior idade: " + maxAge;
    minAgeText.textContent = "Menor idade: " + minAge;
    qtdPesText.textContent = "Quantidade de opiniões péssimas: " + qtdPessimo;
    pctBomText.textContent = "Percentual de opiniões positivas: " + ((qtdBom / totalResponses) * 100).toFixed(2) + "%";
    qtdFemText.textContent = "Quantidade de mulheres: " + qtdFem;
    qtdMascText.textContent = "Quantidade de homens: " + qtdMasc;
    qtdOutrosText.textContent = "Quantidade de outros: " + qtdOutros;

    form.reset();
});
let buttons = document.getElementsByClassName("btn");
let choiceText = document.getElementsByClassName("choice");
let computerChoiceText = document.getElementsByClassName("computer-choice");
let resultText = document.getElementsByClassName("result");

for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", function() {
        play(buttons[i].textContent);
    })
}

function play(x) {
    let resultNum = Math.random();
    let computerChoice;

    if (resultNum <= 0.33) {
        computerChoice = "Pedra";
    }
    else if (resultNum <= 0.66) {
        computerChoice = "Papel";
    }
    else {
        computerChoice = "Tesoura";
    }

    let result;

    switch(x) {
        case "Pedra":
            switch(computerChoice) {
                case "Pedra":
                    result = "Empate";
                    break;
                case "Papel":
                    result = "Derrota";
                    break;
                case "Tesoura":
                    result = "Vitória";
                    break;
            }
            break;
        case "Papel":
            switch(computerChoice) {
                case "Pedra":
                    result = "Vitória";
                    break;
                case "Papel":
                    result = "Empate";
                    break;
                case "Tesoura":
                    result = "Derrota";
                    break;
            }
            break;
        case "Tesoura":
            switch(computerChoice) {
                case "Pedra":
                    result = "Derrota";
                    break;
                case "Papel":
                    result = "Vitória";
                    break;
                case "Tesoura":
                    result = "Empate";
                    break;
            }
            break;
    }

    choiceText[0].textContent = "Você escolheu: " + x;
    computerChoiceText[0].textContent = "O computador escolheu: " + computerChoice;
    resultText[0].textContent = "Resultado: " + result + "!";
}
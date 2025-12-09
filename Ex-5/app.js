let numeroSorte = Math.random() * 10 + 1
numeroSorte = Math.floor(numeroSorte)

alert('Olá Mundo! Adivinha o número em que estou a pensar. Tens 6 tentativas!')

let numeroAdivinha = prompt('Por favor, insira um número de 1 a 10!')

let ganhou = false

// let i = 6

if (numeroAdivinha > 10 || numeroAdivinha <= 0) {
    alert('Esse número não é válido, recomeça.')
} else if (numeroAdivinha != Math.floor(numeroAdivinha)) {
    alert('Tem de ser um número inteiro! Mas vou processar a tua resposta, porque gosto do Inverno.')
} else {
    while (!ganhou) {
        if (numeroSorte == numeroAdivinha) {
            alert('Acertou!')

            ganhou = true;
        } else if (numeroSorte > numeroAdivinha && numeroSorte - numeroAdivinha <= 2 || numeroSorte < numeroAdivinha && numeroAdivinha - numeroSorte <= 2) {
            alert('Estas quase lá!')

            numeroAdivinha = prompt('Por favor insira um número entre 1 a 10!')
        } else if (numeroSorte > numeroAdivinha) {
            alert('Está abaixo!')

            numeroAdivinha = prompt('Por favor insira um número entre 1 a 10!')
        } else {
            alert('Está acima!')

            numeroAdivinha = prompt('Por favor insira um número entre 1 a 10!')
        }
    }
}

// for (let i = 1; i <= 6; i++) {
//     if (i = 1) {
//         alert('Só tens mais uma tentativa!')
//     }
// }
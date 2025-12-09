let numeroSorte = Math.random() * 100 + 1
numeroSorte = Math.floor(numeroSorte)

alert('Olá Mundo! Adivinha o número em que estou a pensar.')

let adivinhar = prompt('Por favor insira um número entre 1 a 100!')
adivinhar = Math.floor(Number(adivinhar))

let ganhou = false

if (adivinhar > 100 || adivinhar <= 0) {
    alert('Esse número não é válido, recomeça.')
} else {
    while (!ganhou) {
        if (numeroSorte == adivinhar) {
            alert('Acertou!')

            ganhou = true;
        } else if (numeroSorte > adivinhar && numeroSorte - adivinhar <= 5 || numeroSorte < adivinhar && adivinhar - numeroSorte <= 5) {
            alert('Estas quase lá!')

            adivinhar = prompt('Por favor insira um número entre 1 a 100!')
        } else if (numeroSorte > adivinhar) {
            alert('Está abaixo!')

            adivinhar = prompt('Por favor insira um número entre 1 a 100!')
        } else {
            alert('Está acima!')

            adivinhar = prompt('Por favor insira um número entre 1 a 100!')
        }
    }
}
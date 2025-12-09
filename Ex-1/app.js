alert('Olá Mundo!')

let nomeUtilizador = prompt('Por favor insira o seu nome!')

alert('Olá ' + nomeUtilizador + '!')

let artistaMultimedia = prompt('Qual é um dos teus artistas multimédia de eleição?')

alert('Não conheço a/o nome! Eu gosto muito da Mileece: https://www.mileece.is/bio')

let arquivoMultimedia = prompt('Esta página é um arquivo de artistas multimédia. Pretendes continuar? Responde 1 caso sim, ou 0 caso não.')

if (arquivoMultimedia === '1') {
    alert('Obrigado!')
} else if (arquivoMultimedia === '0') {
    alert('Que pena!')
} else {
    alert('Por favor, insira um número válido!')
}

alert('Olá Mundo! Vamos fazer contas simples.')

let esquerdaValor = Number()
let direitaValor = Number()

let soma
let subtracao
let multiplicacao
let divisao

let operacao = ['Soma', 'Subtração', 'Multiplicação', 'Divisão']


let escolhaUtilizador = prompt('Escolha das seguintes operações para calcular: Soma, Subtração, Multiplicação e Divisão.')

let resultadoConta = [soma, subtracao, multiplicacao, divisao]

if (escolhaUtilizador === 'Soma') {
    esquerdaValor = prompt('Escolha o primeiro valor da conta:')
    esquerdaValor = Math.floor(Number(esquerdaValor))

    direitaValor = prompt('Escolha o segundo valor da conta:')
    direitaValor = Math.floor(Number(direitaValor))

    soma = esquerdaValor + direitaValor

    resultadoConta = soma

} else if (escolhaUtilizador === 'Subtração') {
    esquerdaValor = prompt('Escolha o primeiro valor da conta:')
    esquerdaValor = Math.floor(Number(esquerdaValor))

    direitaValor = prompt('Escolha o segundo valor da conta:')
    direitaValor = Math.floor(Number(direitaValor))

    subtracao = esquerdaValor - direitaValor

    resultadoConta = subtracao

} else if (escolhaUtilizador === 'Multiplicação') {
    esquerdaValor = prompt('Escolha o primeiro valor da conta:')
    esquerdaValor = Math.floor(Number(esquerdaValor))

    direitaValor = prompt('Escolha o segundo valor da conta:')
    direitaValor = Math.floor(Number(direitaValor))

    multiplicacao = esquerdaValor * direitaValor

    resultadoConta = multiplicacao

} else if (escolhaUtilizador === 'Divisão') {
    esquerdaValor = prompt('Escolha o primeiro valor da conta:')
    esquerdaValor = Math.floor(Number(esquerdaValor))

    direitaValor = prompt('Escolha o segundo valor da conta:')
    direitaValor = Math.floor(Number(direitaValor))

    divisao = esquerdaValor / direitaValor

    resultadoConta = divisao

} else {
    alert('Operação inválida.')
}

console.log(resultadoConta)
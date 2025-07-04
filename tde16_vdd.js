const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const resultado = document.getElementById('resultado')

function somar() {
    if (num1.value === '' || num2.value === '') {
        alert(' Preencha todos os campos!')
    } else {
        const soma = Number(num1.value) + Number(num2.value)
        resultado.textContent = `O resultado da soma é: ${soma}`
    }
}

function limpar() {
    num1.value = ''
    num2.value = ''
    resultado.textContent = 'Resultado = '
    num1.focus()


}

function subtrair() {
    if (num1.value === '' || num2.value === '') {
        alert(' Preencha todos os campos!')
    } else {
        const subtracao = Number(num1.value) - Number(num2.value)
        resultado.textContent = `O resultado da subtração é: ${subtracao}`
    }
}

function multiplicar() {
    if (num1.value === '' || num2.value === '') {
        alert(' Preencha todos os campos!')
    } else {
        const multiplicacao = Number(num1.value) * Number(num2.value)
        resultado.textContent = `O resultado da multiplicação é: ${multiplicacao}`
    }
}

function dividir() {
    if (num1.value === '' || num2.value === '') {
        alert(' Preencha todos os campos!')
    } else {
        const divisao = Number(num1.value) / Number(num2.value)
        resultado.textContent = `O resultado da divisão é: ${divisao}`
    }
}

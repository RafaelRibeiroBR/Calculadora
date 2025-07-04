const media = document.getElementById('resultado')
const ap1 = document.getElementById('ap1')
const ap2 = document.getElementById('ap2')
const as = document.getElementById('as')

function calculo() {
  let notaFinal = Number(ap1.value) + Number(ap2.value) + Number(as.value)

  document.getElementById("resultado").value = media;
  media.textContent = `O resultado da soma é: ${soma}`
}
//calculo()
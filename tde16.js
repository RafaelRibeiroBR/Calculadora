// function alo(){
//     alert("alo")
// }

// // alo()
// function olaNome(nome){
//     if(nome === undefined || nome === ''){
//         alert("Nome não informado")
//     }else{
//         alert(`Olá ${nome}`)
//     }
// }
// olaNome()

// }
// // olanome("josé")

// function somar(num1, num2){
//     return num1 + num2
// }
// somar(10, 20)
// let soma = somar(10, 20)

// alert(somar(10, 30))

function enviar() {
    const nome = document.getElementById('nome').value
    if (nome !== '')
        alert(`Olá ${nome}`)
}
const mouse = document.getElementById('mouse')
mouse.style.backgroundColorcolor = 'lightgrey'

function mouseCima() {
    mouse.textContent = 'O seu mouse está aqui'
    mouse.style.color = 'blue'
}

function mouseSaiu() {
    mouse.textContent = 'O seu mouse saiu'
    mouse.style.color = 'red'
}

function textoMudou(){
    alert('o texto mudou!')
}

const foco = document.getElementById('foco')

function emFoco(){
    foco.style.backgroundColor = 'lightgrey'
    foco.style.fontSize = '18px'
}

function perdeuFoco(){
    foco.style.backgroundColor = 'white'
    foco.style.fontSize = '16px'
    }

function verificarEnter(event) {
            event = event || window.event;
            if (event.keyCode === 13) {
                  alert("Tecla Enter Pressionada!");
            }
  }
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 50,
  loop: true
})



let btn = document.querySelector("#sub-form")
btn.addEventListener('click', clique)

function clique() {
  alert('Mensagem enviada com sucesso')
}


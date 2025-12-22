const bottom = document.querySelector('.bottom')
const button = document.querySelector('button')
const tip = document.querySelector('.tip p')
const content = document.querySelector('.content')
const textarea = document.querySelector('.middle textarea')
const tip_black = document.querySelector('.tip_black')

let unchanged = () => {
  textarea.style.outline = "none"
}
textarea.addEventListener('focus', unchanged)

let timeout = null
let timeout2 = null

let send = () => {
  if (!textarea.value.trim()) return

  tip.style.display = "none"
  button.textContent = "发送中"
  button.style.color = "gray"

  timeout = setTimeout(() => {
    bottom.style.display = "block"
    content.innerHTML = textarea.value
    textarea.value = ''

    tip_black.style.display = "block"

    timeout2 = setTimeout(() => {
      tip_black.style.display = "none"
      button.textContent = "评论"
      button.style.color = "black"
    }, 1000)
  }, 2000)
}
button.addEventListener('click', send)
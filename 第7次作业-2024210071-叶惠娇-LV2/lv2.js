const textarea = document.querySelector('#content')
const text = textarea.value

let unchanged = () => {
  textarea.style.outline = "none"
}
textarea.addEventListener('focus', unchanged)

textarea.value = ''
const chars = text.split('')
let i = 0

let printNextChar = () => {
  if (i < chars.length) {
    textarea.value += chars[i]
    i++
    setTimeout(printNextChar, 200)
  }
}

printNextChar()
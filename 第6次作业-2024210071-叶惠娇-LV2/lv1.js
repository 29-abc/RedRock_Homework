const buttons = document.querySelectorAll('input[type = "button"]')
const checkboxs = document.querySelectorAll('input[type = "checkbox"]')

//全选
let checkedAlltrue = () => {
  checkboxs.forEach(checkbox => { checkbox.checked = true })
}
buttons[0].addEventListener('click', checkedAlltrue)

//全不选
let checkedAllfalse = () => {
  checkboxs.forEach(checkbox => { checkbox.checked = false })
}
buttons[1].addEventListener('click', checkedAllfalse)

//反选
let checkedAllreverse = () => {
  checkboxs.forEach(checkbox => { checkbox.checked = !checkbox.checked })
}
buttons[2].addEventListener('click', checkedAllreverse)
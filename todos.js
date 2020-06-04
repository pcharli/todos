import "bulma"

console.log('todos')

const input = document.querySelector(".form-todos_input")
const button = document.querySelector(".form-todos_button")
const todoliste = document.querySelector(".todos-list")

button.addEventListener("click", function(e) {
    e.preventDefault()
   // alert(input.value)
    todoliste.innerHTML += `
    <li  class="list-item todos-list_item">${input.value}</li>
    `
    input.value = ''
    input.focus()
})
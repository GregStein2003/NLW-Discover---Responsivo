import Modal from './modal.js'

const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalBtn = document.querySelector('.modal button')


// Informações elementos classe check
const checkBtn = document.querySelectorAll('.checkBtn')

checkBtn.forEach((button) => {
    button.addEventListener("click", handleClick)
})

const deleteBtn = document.querySelectorAll('.deleteBtn')

deleteBtn.forEach((button) => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('#formDelete')
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalBtn.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalBtn.classList.remove("red") : modalBtn.classList.add("red")

    modal.open()
}



const textarea = document.querySelector('textarea')
const addBtn = document.getElementById('addBtn')
const todoContainer = docuemnt.querySelector('.todoContainer')

let todoList = []

function addTodo() {
    const todo = textarea.value
    if(!todo) {
        return
    }
    todoList.push(todo)
    textarea.value = ''
    updateUI()
}

function updateUI() {

}

addBtn.addEventListener('click', addTodo)
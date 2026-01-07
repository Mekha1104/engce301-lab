const form = document.querySelector("form")
const todoInput = document.querySelector("#todo-input")
const addButton = document.querySelector("#add-button")
const todoList = document.querySelector("#todo-list")

let todos = []

function addTodo() {
  const todoText = todoInput.value.trim()

  if (todoText.length === 0) {
    alert("กรุณากรอกข้อความ")
    return
  }

  if (todoText.length > 50) {
    alert("ข้อความต้องไม่เกิน 50 ตัวอักษร (ปัจจุบัน: " + todoText.length + " ตัวอักษร)")
    return
  }

  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  }

  todos.push(todo)
  todoInput.value = ""
  renderTodos()
}

function deleteTodo(id) {
  const confirmDelete = confirm("คุณต้องการลบงานนี้หรือไม่?")

  if (confirmDelete) {
    todos = todos.filter((todo) => todo.id !== id)
    renderTodos()
  }
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  renderTodos()
}

function renderTodos() {
  todoList.innerHTML = ""

  todos.forEach((todo) => {
    const todoItem = document.createElement("li")
    const todoText = document.createElement("span")
    const todoDeleteButton = document.createElement("button")

    const myCheck = document.createElement("INPUT")
    myCheck.setAttribute("type", "checkbox")
    myCheck.checked = todo.completed

    myCheck.addEventListener("click", (event) => {
      event.stopPropagation() // Prevent li click event
      toggleCompleted(todo.id)
    })

    todoText.textContent = todo.text
    todoDeleteButton.textContent = "Delete"

    todoDeleteButton.addEventListener("click", (event) => {
      event.stopPropagation()
      deleteTodo(todo.id)
    })

    if (todo.completed) {
      todoItem.classList.add("completed")
    }

    todoItem.addEventListener("click", () => toggleCompleted(todo.id))

    todoItem.appendChild(myCheck)
    todoItem.appendChild(todoText)
    todoItem.appendChild(todoDeleteButton)

    todoList.appendChild(todoItem)
  })
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  addTodo()
})

renderTodos()

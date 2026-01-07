// เลือก DOM Elements
const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");
const charCounter = document.querySelector("#char-counter");
const errorMessage = document.querySelector("#error-message");
const emptyState = document.querySelector("#empty-state");
const totalTasksEl = document.querySelector("#total-tasks");
const completedTasksEl = document.querySelector("#completed-tasks");
const pendingTasksEl = document.querySelector("#pending-tasks");

// Array เก็บ todos
let todos = [];

// ฟังก์ชันอัพเดท character counter
function updateCharCounter() {
    const length = todoInput.value.length;
    charCounter.textContent = `${length} / 50 characters`;
    
    // เปลี่ยนสีเตือนเมื่อใกล้ถึง limit
    if (length >= 45) {
        charCounter.classList.add('warning');
    } else {
        charCounter.classList.remove('warning');
    }
    
    // ซ่อน error message เมื่อพิมพ์
    errorMessage.classList.remove('show');
}

// Event listener สำหรับ character counter
todoInput.addEventListener('input', updateCharCounter);

// ฟังก์ชันเพิ่ม todo
function addTodo() {
    const todoText = todoInput.value.trim();
    
    // Validation: ตรวจสอบความยาว
    if (todoText.length > 50) {
        showError('❌ Task must not exceed 50 characters!');
        return;
    }
    
    // Validation: ตรวจสอบว่าไม่ว่าง
    if (todoText.length === 0) {
        showError('❌ Please enter a task!');
        return;
    }
    
    // สร้าง todo object
    const todo = {
        id: Date.now(),
        text: todoText,
        completed: false,
    };
    
    // เพิ่มเข้า array
    todos.push(todo);
    
    // Clear input
    todoInput.value = "";
    updateCharCounter();
    
    // Render todos
    renderTodos();
    updateStats();
}

// ฟังก์ชันแสดง error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    
    // ซ่อน error หลังจาก 3 วินาที
    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 3000);
}

// ฟังก์ชันลบ todo (พร้อม confirmation)
function deleteTodo(id) {
    // แสดง confirmation dialog
    const confirmed = confirm('Are you sure you want to delete this task?');
    
    if (confirmed) {
        todos = todos.filter((todo) => todo.id !== id);
        renderTodos();
        updateStats();
    }
}

// ฟังก์ชัน toggle completed
function toggleCompleted(id) {
    todos = todos.map((todo) => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    renderTodos();
    updateStats();
}

// ฟังก์ชันแสดง todos
function renderTodos() {
    // Clear list
    todoList.innerHTML = "";
    
    // ตรวจสอบว่ามี todos หรือไม่
    if (todos.length === 0) {
        emptyState.classList.add('show');
        return;
    } else {
        emptyState.classList.remove('show');
    }
    
    // สร้าง list items
    todos.forEach((todo) => {
        // สร้าง elements
        const todoItem = document.createElement("li");
        const checkboxWrapper = document.createElement("div");
        const checkbox = document.createElement("div");
        const todoText = document.createElement("span");
        const todoDeleteButton = document.createElement("button");
        
        // เพิ่ม classes
        checkboxWrapper.className = "checkbox-wrapper";
        checkbox.className = "custom-checkbox";
        todoText.className = "todo-text";
        todoDeleteButton.className = "delete-btn";
        
        // ตั้งค่า content
        todoText.textContent = todo.text;
        todoDeleteButton.textContent = "Delete";
        
        // ตั้งค่า checkbox
        if (todo.completed) {
            checkbox.classList.add("checked");
            todoItem.classList.add("completed");
        }
        
        // Event listeners
        checkboxWrapper.addEventListener("click", (e) => {
            e.stopPropagation(); // ป้องกัน event bubbling
            toggleCompleted(todo.id);
        });
        
        todoDeleteButton.addEventListener("click", (e) => {
            e.stopPropagation(); // ป้องกัน event bubbling
            deleteTodo(todo.id);
        });
        
        // สร้างโครงสร้าง
        checkboxWrapper.appendChild(checkbox);
        todoItem.appendChild(checkboxWrapper);
        todoItem.appendChild(todoText);
        todoItem.appendChild(todoDeleteButton);
        
        // เพิ่มเข้า list
        todoList.appendChild(todoItem);
    });
}

// ฟังก์ชันอัพเดทสถิติ
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const pending = total - completed;
    
    totalTasksEl.textContent = total;
    completedTasksEl.textContent = completed;
    pendingTasksEl.textContent = pending;
}

// Event listener สำหรับ form submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo();
});

// Event listener สำหรับ Enter key
todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addTodo();
    }
});

// เริ่มต้น
renderTodos();
updateStats();
updateCharCounter();

// Log เพื่อแสดงว่า script โหลดสำเร็จ
console.log('📝 Todo List Loaded!');
console.log('Features:');
console.log('✅ เครื่องหมาย ✓ เมื่อเสร็จงาน');
console.log('✅ ขีดคร่อมข้อความเมื่อเสร็จ');
console.log('✅ Alert confirm ก่อนลบ Task');
console.log('✅ เช็คความยาวไม่เกิน 50 characters');
console.log('✅ Character counter แบบ real-time');
console.log('✅ สถิติ Total/Completed/Pending');
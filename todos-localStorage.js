const todoForm = document.querySelector('form');
const todoList = document.querySelector('ol');

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
savedTodos.forEach(todo => {
    const newTodo = createTodoElement(todo.task, todo.isCompleted);
    todoList.appendChild(newTodo);
});

// Function to create a new todo item element
function createTodoElement(task, isCompleted) {
    const newTodo = document.createElement('li');
    newTodo.innerText = task;
    if (isCompleted) {
        newTodo.classList.add("completed");
    }
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    newTodo.appendChild(removeBtn);
    return newTodo;
}

// Function to add a new todo item
function addTodoItem(task) {
    const newTodo = createTodoElement(task, false);
    savedTodos.push({ task: task, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    todoList.appendChild(newTodo);
}

// Event listener for form submission
todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const taskValue = document.getElementById("addtodo").value.trim();
    if (taskValue !== "") {
        addTodoItem(taskValue);
        todoForm.reset();
    }
});

// Event delegation for todo list and remove buttons
todoList.addEventListener('click', function(e) {
    const target = e.target;
    if (target.tagName === "LI") {
        target.classList.toggle("completed");
        const taskText = target.firstChild.textContent.trim();
        const todoIndex = savedTodos.findIndex(todo => todo.task === taskText);
        if (todoIndex !== -1 && savedTodos[todoIndex]) {
            savedTodos[todoIndex].isCompleted = !savedTodos[todoIndex].isCompleted;
            localStorage.setItem("todos", JSON.stringify(savedTodos));
        }

    } else if (target.tagName === "BUTTON") {
        const listItem = target.closest('li');
        const taskText = listItem.firstChild.textContent.trim();
        console.log("Clicked task:", taskText);
        const todoIndex = savedTodos.findIndex(todo => todo.task === taskText);
        if (todoIndex !== -1) {
            savedTodos.splice(todoIndex, 1);
            localStorage.setItem("todos", JSON.stringify(savedTodos));
            listItem.remove();
        }
    }
});
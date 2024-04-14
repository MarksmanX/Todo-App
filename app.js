const addform = document.querySelector("form");
const todolist = document.querySelector("ol");
const todotext = document.querySelector("#addtodo");

todolist.addEventListener('click', function(e) {
    if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
})

addform.addEventListener('submit', function(e) {
    e.preventDefault();
    const newtodo = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    newtodo.innerText = todotext.value + " ";
    newtodo.appendChild(removeBtn);
    todolist.appendChild(newtodo);
    todotext.value = '';
})





/* const toggleSwitch = document.querySelector('input[type="checkbox"]');

if(localStorage.getItem('darkModeEnabled')){
    document.body.className = 'dark';
    toggleSwitch.checked = true;
}


toggleSwitch.addEventListener('click', function(e) {
    const {checked} = toggleSwitch;
    if (checked){
        localStorage.setItem('darkModeEnabled', true);
    }
    else {
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark' : "";
    
}) */
import "./style.css";
import { todoFactory, todoConstructor } from "./todo-factory.js";

//variables
const todoItemFormContainer = document.getElementById("todoItemFormContainer");
const todoItemForm = document.getElementById("todoItemForm");
let todoItemFormBtn = document.getElementById('todoItemFormBtn');
let mainContent = document.getElementById("mainContent");
let defaultProjects = document.getElementById("defaultProjects");
let inbox = document.getElementById("inbox");
let addTodoItemBtn = document.getElementById("addTodoItemBtn");
let addProjectBtn = document.getElementById("addProject");
const projectFromContainer = document.getElementById("projectFormContainer");
let hideProjectFormBtn = document.getElementById("hideProjectFormBtn");
const inputForms = document.getElementsByClassName("inputForms")

// let funProjects = [];

todoItemFormContainer.addEventListener('submit', (event) => {
    event.preventDefault();
});

projectFormContainer.addEventListener('submit', (event) => {
    event.preventDefault();
});

// inputForms.addEventListener('submit', (event) => {
//     event.preventDefault();
// })

//functions
// let workout = todoFactory("workout", "go to the gym and do a session", "02/26/2023", "high");
// let carDelivery = todoFactory("pickup car", "pickup new car from dealership", "03/08/2023", "high")

// let mealPrep = new todoConstructor("mealprep", "make food", "02/28/2023", "medium");
function addTodoItem() {
    let newTitle = document.forms["todoItemForm"]["todoTitle"].value;
    let newDescription = document.forms["todoItemForm"]["todoDescription"].value;
    let newDueDate = document.forms["todoItemForm"]["todoDuedate"].value;
    let newPriority = document.forms["todoItemForm"]["todoPriority"].value;
    if (newTitle == "" || newDescription == "" || newDueDate == "" || newPriority == "") {
        alert("Fill it out!");
        return false;
    }
    else {
        let newTodoConstructor = new todoConstructor(newTitle, newDescription, newDueDate, newPriority);

        let todoItem = document.createElement('p');
        defaultProjects.appendChild(todoItem);
        todoItem.innerText = `TODO ITEM: ${newTitle}.\nDESCRIPTION: ${newDescription}.\nDUE-DATE: ${newDueDate}.\nPRIORITY: ${newPriority}.`;
    }
    hideAddTodoForm();
}


function validateForm() {

}

function showInbox() {

}

function showAddProject() {
    projectFromContainer.style.display = "flex";
}

function hideAddProject() {
    projectFromContainer.style.display = "none";
}

function showAddTodoForm() {
    todoItemFormContainer.style.display = "flex";
    todoItemForm.reset();
}
function hideAddTodoForm() {
    todoItemFormContainer.style.display = "none";
    todoItemForm.reset();
}
//Projects will be dom created elements, todo items will be appended to the dom elements/projects. Default project == inbox

addTodoItemBtn.addEventListener("click", addTodoItem);
todoItemFormBtn.addEventListener("click", showAddTodoForm);
document.getElementById("hideForm").addEventListener("click", hideAddTodoForm);
addProjectBtn.addEventListener("click", showAddProject);
hideProjectFormBtn.addEventListener("click", hideAddProject);


// defaultProjects.push(workout);
// defaultProjects.push(carDelivery);
// defaultProjects.innerHTML = `Task: ${workout.title}. Details: ${workout.description}`;



// funProjects = defaultProjects.splice(0,1)
// console.log(defaultProjects[0].description);
// console.log(funProjects[0].description);


// console.log(typeof(workout));
// console.log(defaultProjects);
// console.log(defaultProjects[1]);



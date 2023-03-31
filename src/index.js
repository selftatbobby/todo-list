import "./style.css";
import { todoFactory, todoConstructor } from "./todo-factory.js";
import { newProject } from "./projects";

//variables
const todoItemFormContainer = document.getElementById("todoItemFormContainer");
const todoItemForm = document.getElementById("todoItemForm");
const addProjectForm = document.getElementById("addProjectForm");
let todoItemFormBtn = document.getElementById("todoItemFormBtn");
let hideTodoFormBtn = document.getElementById("hideTodoFormBtn");
let mainContent = document.getElementById("mainContent");
let defaultProjects = document.getElementById("defaultProjects");
let inbox = document.getElementById("inbox");
let addTodoItemBtn = document.getElementById("addTodoItemBtn");
let addProjectBtn = document.getElementById("addProject");
let createProjectBtn = document.getElementById("createProjectBtn");
const projectFromContainer = document.getElementById("projectFormContainer");
let hideProjectFormBtn = document.getElementById("hideProjectFormBtn");
const inputForms = document.querySelectorAll(".inputForms");

// let funProjects = [];


//prevents form submit
inputForms.forEach(item => {
    item.addEventListener("click", event => {
        event.preventDefault();
    })
})
// todoItemFormContainer.addEventListener('submit', (event) => {
//     event.preventDefault();
// });

// projectFormContainer.addEventListener('submit', (event) => {
//     event.preventDefault();
// });



//functions

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

function createProject() {
    //todo: add div to display
    mainContent.insertBefore(newProject, todoItemFormBtn)
    //line below references the child elements of target element
    console.log(mainContent.children[1]);
    //todo: name of project
    //todo: create button to go back to this page/div
    //todo: implement same layout as inbox page/div
    hideAddProject();
}

function showAddProject() {
    projectFromContainer.style.display = "flex";
    addProjectForm.reset();
}

function hideAddProject() {
    projectFromContainer.style.display = "none";
    addProjectForm.reset();
}

function showAddTodoForm() {
    todoItemFormContainer.style.display = "flex";
    todoItemForm.reset();
}
function hideAddTodoForm() {
    todoItemFormContainer.style.display = "none";
    todoItemForm.reset();
}

// addevent to buttons
addTodoItemBtn.addEventListener("click", addTodoItem);
todoItemFormBtn.addEventListener("click", showAddTodoForm);
hideTodoFormBtn.addEventListener("click", hideAddTodoForm);

addProjectBtn.addEventListener("click", showAddProject);
hideProjectFormBtn.addEventListener("click", hideAddProject);
createProjectBtn.addEventListener("click", createProject);
//Projects will be dom created elements, todo items will be appended to the dom elements/projects. Default project == inbox
// mainContent.appendChild(newProject);


// defaultProjects.push(workout);
// defaultProjects.push(carDelivery);
// defaultProjects.innerHTML = `Task: ${workout.title}. Details: ${workout.description}`;



// funProjects = defaultProjects.splice(0,1)
// console.log(defaultProjects[0].description);
// console.log(funProjects[0].description);


// console.log(typeof(workout));
// console.log(defaultProjects);
// console.log(defaultProjects[1]);


// let workout = todoFactory("workout", "go to the gym and do a session", "02/26/2023", "high");
// let carDelivery = todoFactory("pickup car", "pickup new car from dealership", "03/08/2023", "high")

// let mealPrep = new todoConstructor("mealprep", "make food", "02/28/2023", "medium");
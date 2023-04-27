import "./style.css";
import { todoFactory, todoConstructor } from "./todo-factory.js";
import { projectConstructor } from "./projects";

//variables
const todoItemFormContainer = document.getElementById("todoItemFormContainer");
const todoItemForm = document.getElementById("todoItemForm");
const addProjectForm = document.getElementById("addProjectForm");
let todoItemFormBtn = document.getElementById("todoItemFormBtn");
let hideTodoFormBtn = document.getElementById("hideTodoFormBtn");
let mainContent = document.getElementById("mainContent");
let defaultProjects = document.getElementById("defaultProjects");
let inboxBtn = document.getElementById("inboxBtn");
let addTodoItemBtn = document.getElementById("addTodoItemBtn");
let addProjectBtn = document.getElementById("addProject");
let createProjectBtn = document.getElementById("createProjectBtn");
const projectFromContainer = document.getElementById("projectFormContainer");
let hideProjectFormBtn = document.getElementById("hideProjectFormBtn");
const inputForms = document.querySelectorAll(".inputForms");
let projectDashboard = document.getElementById("projectDashboard");




showInbox();

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
        todoItem.innerText = `TODO ITEM: ${newTitle}.\nDESCRIPTION: ${newDescription}.\nDUE-DATE: ${newDueDate}.\nPRIORITY: ${newPriority}.`;


        var i;
        let projectClass = document.querySelectorAll(".projectClass");
        for (i = 0; i < projectClass.length; i++) {     //logic for which div to append* for loop if then
            if (projectClass[i].style.display == "flex") {
                projectClass[i].appendChild(todoItem);//adds todo item to project that is displayed in 'flex'
            };
        
        }
    }
    hideAddTodoForm();
}


function createProject() {
    //todo: add div to display
    let newProjectTitle = document.forms["addProjectForm"]["projectTitle"].value;//todo: name of project
    if (newProjectTitle == "") {
        alert("Fill it out!");
        return false;
    }
    else {
        let newProjectConstructor = new projectConstructor(newProjectTitle);
        let newProject = document.createElement("div");//create div for new project
        let projectTitleElement = document.createElement("h1");//create title
        projectTitleElement.innerHTML = `Project: ${newProjectTitle}`;//let's make this the title of project/div
        newProject.appendChild(projectTitleElement);
        
        newProject.classList.add("projectClass");

        mainContent.insertBefore(newProject, todoItemFormBtn);

        let newProjectButton = document.createElement("button");//create button for new project
        newProjectButton.innerHTML = newProjectTitle;

        newProjectButton.addEventListener("click", hideProjects);
        // let projectIndex = (mainContent.children.length - 2);
        newProjectButton.onclick = function() {
            newProject.style.display = "flex";
        }
        newProject.style.display = "flex"; //initiates display "flex"
        hideInbox(); 
        projectDashboard.appendChild(newProjectButton);
    }
    hideAddProjectForm();
}


function showAddProject() {
    projectFromContainer.style.display = "flex";
    addProjectForm.reset();
}

function hideAddProjectForm() {
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

function showInbox() {
    defaultProjects.style.display = "flex";
}

function hideInbox() {
    defaultProjects.style.display = "none";
}

function hideProjects() {
    //Set all projectClass classed elements' display to none
    let projectClass = document.querySelectorAll(".projectClass");
    var i;
    for (i = 0; i < projectClass.length; i++) {
        projectClass[i].style.display = "none";
    }
}



// addeventlisteners
addTodoItemBtn.addEventListener("click", addTodoItem);
todoItemFormBtn.addEventListener("click", showAddTodoForm);
hideTodoFormBtn.addEventListener("click", hideAddTodoForm);

addProjectBtn.addEventListener("click", showAddProject);
hideProjectFormBtn.addEventListener("click", hideAddProjectForm);
createProjectBtn.addEventListener("click", createProject);

inboxBtn.addEventListener("click", hideProjects);
inboxBtn.addEventListener("click", showInbox);

inputForms.forEach(item => {
    item.addEventListener("submit", event => {
        event.preventDefault();
    })
})//prevents form submission


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


// let funProjects = [];





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
        for (i = 0; i < projectClass.length; i++) {                  //logic for which div to append* for loop if then
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
        newProject.innerHTML = "hi0";//let's make this the title of project/div
        newProject.classList.add("projectClass");

        mainContent.insertBefore(newProject, todoItemFormBtn);

        let newProjectButton = document.createElement("button");//create button for new project
        newProjectButton.innerHTML = newProjectTitle;

        newProjectButton.addEventListener("click", hideProjects);
        // let projectIndex = (mainContent.children.length - 2);
        newProjectButton.onclick = function() {
            // mainContent.children[projectIndex].style.display = "flex";
            newProject.style.display = "flex";
        }
        projectDashboard.appendChild(newProjectButton);

        //hide every other div except for target div


        // console.log(mainContent.children[1].style.display);//references the child elements of target element
        
        
        // console.log(mainContent.indexOf(newProject));
        //todo: create button to go back to this page/div
    }
    //todo: implement same layout as inbox page/div
    hideAddProjectForm();
}

// function showProject(projectIndex) {
//     mainContent.children[projectIndex].style.display = "flex";
// }

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

function hideProjects() {
    //Set all projectClass classed elements' display to none
    let projectClass = document.querySelectorAll(".projectClass");
    var i;
    for (i = 0; i < projectClass.length; i++) {
        projectClass[i].style.display = "none";
    }
    // console.log(projectClass.length);
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




// todoItemFormContainer.addEventListener('submit', (event) => {
//     event.preventDefault();
// });

// projectFormContainer.addEventListener('submit', (event) => {
//     event.preventDefault();
// });

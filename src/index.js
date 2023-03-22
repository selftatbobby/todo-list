import "./style.css";
import { todoFactory, todoConstructor } from "./todo-factory.js";

//variables
const addTodoItemForm = document.getElementById("addTodoItemForm");
const todoItemForm = document.getElementById("todoItemForm");
let todoItemFormBtn = document.getElementById('todoItemFormBtn');
let mainContent = document.getElementById("mainContent");
let defaultProjects = document.getElementById("defaultProjects");
let inbox = document.getElementById("inbox");
let addTodoItemBtn = document.getElementById("addTodoItemBtn");

// let funProjects = [];

addTodoItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

//functions
let workout = todoFactory("workout", "go to the gym and do a session", "02/26/2023", "high");
let carDelivery = todoFactory("pickup car", "pickup new car from dealership", "03/08/2023", "high")

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
        todoItem.innerText = `Todo Item: ${newTitle}. Description: ${newDescription}.`;
    }
    hideAddTodoForm();
}


function validateForm() {

}

function showInbox() {

}




function showAddTodoForm() {
    addTodoItemForm.style.display = "flex";
    todoItemForm.reset();
}
function hideAddTodoForm() {
    addTodoItemForm.style.display = "none";
    todoItemForm.reset();
}
//Projects will be dom created elements, todo items will be appended to the dom elements/projects. Default project == inbox

addTodoItemBtn.addEventListener("click", addTodoItem);
todoItemFormBtn.addEventListener("click", showAddTodoForm);
document.getElementById("hideForm").addEventListener("click", hideAddTodoForm);


// defaultProjects.push(workout);
// defaultProjects.push(carDelivery);
// defaultProjects.innerHTML = `Task: ${workout.title}. Details: ${workout.description}`;



// funProjects = defaultProjects.splice(0,1)
// console.log(defaultProjects[0].description);
// console.log(funProjects[0].description);


// console.log(typeof(workout));
// console.log(defaultProjects);
// console.log(defaultProjects[1]);



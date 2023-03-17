import "./style.css";
import { todoFactory, todoConstructor } from "./todo-factory.js";

//variables
const addTodoItemForm = document.getElementById("addTodoItemForm");
const form = document.getElementById('todoItemForm');
let mainContent = document.getElementById("mainContent");
let defaultProjects = document.getElementById("defaultProjects");
let inbox = document.getElementById("inbox");
let addTodoItemBtn = document.getElementById("addTodoItem");

// let funProjects = [];

addTodoItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

//functions
let workout = todoFactory("workout", "go to the gym and do a session", "02/26/2023", "high");
let carDelivery = todoFactory("pickup car", "pickup new car from dealership", "03/08/2023", "high")

// let mealPrep = new todoConstructor("mealprep", "make food", "02/28/2023", "medium");
function addTodoItem() {
    let newTitle = "hi";
    let newDescription = "hsi";
    let newDueDate = "his";
    let newPriority = "hissss";
    let newTodoConstructor = new todoConstructor(newTitle, newDescription, newDueDate, newPriority);
    let todoItem = document.createElement('p');
    defaultProjects.appendChild(todoItem);
    todoItem.innerText = `Todo Item: ${newTitle}. Description: ${newDescription}.`;

}

function showInbox() {
    

}

addTodoItemBtn.addEventListener("click", addTodoItem);


class a {

}
//Projects will be dom created elements, todo items will be appended to the dom elements/projects. Default project == inbox




// defaultProjects.push(workout);
// defaultProjects.push(carDelivery);
// defaultProjects.innerHTML = `Task: ${workout.title}. Details: ${workout.description}`;



// funProjects = defaultProjects.splice(0,1)
// console.log(defaultProjects[0].description);
// console.log(funProjects[0].description);


// console.log(typeof(workout));
// console.log(defaultProjects);
// console.log(defaultProjects[1]);



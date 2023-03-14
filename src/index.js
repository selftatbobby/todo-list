import "./style.css";
import { todoFactory, todoConstructor } from "./todo-factory.js";

let defaultProjects = [];
let funProjects = [];




let workout = todoFactory("workout", "go to the gym and do a session", "02/26/2023", "high");
let carDelivery = todoFactory("pickup car", "pickup new car from dealership", "03/08/2023", "high")

// let mealPrep = new todoConstructor("mealprep", "make food", "02/28/2023", "medium");




//Projects will be dom created elements, todo items will be appended to the dom elements/projects. Default project == inbox




defaultProjects.push(workout);
defaultProjects.push(carDelivery);


funProjects = defaultProjects.splice(0,1)
console.log(defaultProjects[0].description);
console.log(funProjects[0].description);


console.log(typeof(workout));
console.log(defaultProjects);
console.log(defaultProjects[1]);



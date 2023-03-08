import "./style.css";


//Factory function pattern to create todo items
const todoFactory = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
}
let workout = todoFactory("workout", "go to the gym and do a session", "02/26/2023", "high");
let carDelivery = todoFactory("pickup car", "pickup new car from dealership", "03/08/2023", "high")




//Constructor pattern to create todo items
const todoConstructor = function(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}
let mealPrep = new todoConstructor("mealprep", "make food", "02/28/2023", "medium");


//Projects will be arrays
let defaultProjects = [];
let funProjects = [];
defaultProjects.push(workout, mealPrep);
defaultProjects.push(carDelivery);


funProjects = defaultProjects.splice(0,1)
console.log(defaultProjects[0].description);
console.log(funProjects[0].description);


console.log(typeof(workout));
console.log(defaultProjects);
console.log(defaultProjects[1]);

function createProject(projectName) {
    let projectName = [];
}

createProject(camping);
console.log(camping);

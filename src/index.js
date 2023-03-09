import "./style.css";


//Factory function pattern to create todo items
const todoFactory = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
}
let workout = todoFactory("workout", "go to the gym and do a session", "02/26/2023", "high");
let carDelivery = todoFactory("pickup car", "pickup new car from dealership", "03/08/2023", "high")




//Constructor pattern to create todo items
const todoConstructor = function(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}
let mealPrep = new todoConstructor("mealprep", "make food", "02/28/2023", "medium");


//Projects will be dom created elements



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


const projectFactory = (projectName) => {
    var projectName = [];
    return projectName;
}

let test1 = new projectFactory();
console.log(test1);
console.log("hi");
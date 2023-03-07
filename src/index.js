import "./style.css";


//Factory function pattern
const todoFactory = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
}
let workout = todoFactory("workout", "go to the gym and do a session", "02/26/2023", "high");
console.log(workout.dueDate);



//Constructor pattern
const todoConstructor = function(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}
let mealPrep = new todoConstructor("mealprep", "make food", "02/28/2023", "medium");
console.log(mealPrep.dueDate);

//Projects
let defaultProjects = [];
let funProjects = [];
defaultProjects.push(workout, mealPrep);


funProjects = defaultProjects.splice(0,1)
console.log(defaultProjects[0].description);
console.log(funProjects[0].description);

defaultProjects["height"]=mealPrep.dueDate;
console.log(defaultProjects["height"]);

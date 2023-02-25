//Factory function pattern
const todoFactory = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
}
const workout = todoFactory("workout", "go to the gym and do a session", "02/26/2023", "high");
console.log(workout.dueDate);




//Constructor pattern
const todoConstructor = function(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}
const mealPrep = new todoConstructor("mealprep", "make food", "02/28/2023", "medium");
console.log(mealPrep.dueDate);
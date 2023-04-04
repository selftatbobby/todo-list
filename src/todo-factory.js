//Factory function pattern to create todo items
const todoFactory = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
}

//Constructor pattern to create todo items
const todoConstructor = function(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}
export {todoFactory, todoConstructor}; 

function ToDoList() {
  this.toDoItems= [],
  this.currentId = 0
}



ToDoList.prototype.addToDoItem = function(newTaskObject) {
  newTaskObject.id = this.assignId();
  this.toDoItems.push(newTaskObject);
}


ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// user interface logic follows-------------------------------------------



function TaskObject(task, person) {
  this.task = task,
  this.person = person

}

var toDoList = new ToDoList();
// console.log(toDoList);

    $(document).ready(function() {


      $("form#userFormInput").submit(function(event) {
        event.preventDefault();


        var task = $("input#userInput").val();
        var person = $("input#personInput").val();

        var newTaskObject = new TaskObject(task, person);


        toDoList.addToDoItem(newTaskObject);
        console.log(toDoList);








});
});

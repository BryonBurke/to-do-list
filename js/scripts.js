
function ToDoList() {
  this.toDoItems= [],
  this.currentId = 0
}



ToDoList.prototype.addToDoItem = function(newListItem) {
  newListItem.id = this.assignId();
  this.toDoList.push(newListItem);
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



    $(document).ready(function() {
      var toDoList = new ToDoList();





      $("form#userFormInput").submit(function(event) {
        event.preventDefault();


        var task = $("input#userInput").val();
        var person = $("input#personInput").val();

        var newListItem = new TaskObject(task, person);


        toDoList.addToDoItem(newListItem);
        console.log(toDoList);








});
});

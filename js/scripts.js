
function ToDoList() {  // Contstructor function- the Blue Print
  this.toDoItems= [],
  this.currentId = 0
}

ToDoList.prototype.addToDoItem = function(newTaskObject) { //
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

var toDoList = new ToDoList(); // variale that stores the To Do List

function displayContactDetails(toDoListToDisplay) {
  var tasksList = $("ul#toDoItems");
  var htmlForContactInfo = "";
  toDoListToDisplay.toDoItem.forEach(function(newTaskObject) {
    htmlForContactInfo += "<li id=" + newTaskObject.id + ">" + newTaskObject.task + " " + contact.person + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

// function displayContactDetails(addressBookToDisplay) {
//   var contactsList = $("ul#contacts");
//   var htmlForContactInfo = "";
//   addressBookToDisplay.contacts.forEach(function(contact) {
//     htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
//   });
//   contactsList.html(htmlForContactInfo);
// };


    $(document).ready(function() {

      $("form#userFormInput").submit(function(event) {
        event.preventDefault();

        var task = $("input#userInput").val();
        var person = $("input#personInput").val();

        var newTaskObject = new TaskObject(task, person);

        toDoList.addToDoItem(newTaskObject);

displayContactDetails(toDoList);

         // fires the addToDoItem prototype function to push

        console.log(toDoList.toDoItems);
// console.log(newTaskObject);



});
});

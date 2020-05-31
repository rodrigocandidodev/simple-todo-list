var listElement     = document.querySelector('#app ul');
var inputElement    = document.querySelector('input[type=text]');
var buttonElement   = document.querySelector('#app button');

var todos = [];

function renderToDos(){
    listElement.innerHTML = "";
    for(todo of todos){
        var todoElement     = document.createElement('li');
        var todoText        = document.createTextNode(todo);

        var linkElement     = document.createElement('a');
        var linkElementText = document.createTextNode('Delete');

        linkElement.setAttribute('href','#');
        linkElement.appendChild(linkElementText);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}
renderToDos();

function addToDo(){
    var newToDo    = inputElement.value;
    todos.push(newToDo);
    inputElement.value  ='';
    renderToDos();
}
buttonElement.setAttribute('onclick','addToDo()');
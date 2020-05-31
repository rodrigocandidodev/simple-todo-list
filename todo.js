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

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('href','#');
        linkElement.setAttribute('onclick','deleteToDo('+ pos +')');
        linkElement.appendChild(linkElementText);
        
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        todoElement.appendChild(linkElement);

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

function deleteToDo(position){
    todos.splice(position,1);
    renderToDos();
}
var listElement     = document.querySelector('#app ul');
var inputElement    = document.querySelector('input[type=text]');
var buttonElement   = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('simple_todo_app_storage')) || [];

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
    saveInStorage();
    renderToDos();
}
buttonElement.setAttribute('onclick','addToDo()');

function deleteToDo(position){
    todos.splice(position,1);
    saveInStorage();
    renderToDos();
}
function saveInStorage(){
    localStorage.setItem('simple_todo_app_storage', JSON.stringify(todos));
}
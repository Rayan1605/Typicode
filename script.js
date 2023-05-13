const apiUrl = "https://jsonplaceholder.typicode.com/todos";

function GetFunction(){
    fetch(apiUrl + '?_limit=5').then((res) => res.json())
        .then((data) => {

           data.forEach((todo) => {
             AddToDom(todo);
           })
        })
}
function AddToDom(todo){
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute("data-id",todo.id) // to make an id
    if (todo.completed){
        div.classList.add.done;
    }
    document.getElementById("todo-list").appendChild(div);
}

GetFunction();

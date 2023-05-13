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
    div.classList.add('todo'); //So this put every todo a class call that so we can target it
    div.setAttribute("data-id",todo.id) // to make an id
    if (todo.completed){
        div.classList.add.done;
    }
    document.getElementById("todo-list").appendChild(div);
}

function CreateTodo(e) {
e.preventDefault();

    const newtdo = {
        title: e.target.firstElementChild.value,
        completed: false
    }
    fetch(apiUrl,{
      method: "Post",
      body: JSON.stringify(newtdo),
      headers: {
          "Content-Type": "Application/json"
      }
    }).then((res) => res.json()).then((data) => AddToDom(data));

}

function ToggleCompleted(e) {
    if (e.target.classList.contains('todo')){
        e.target.classList.toggle("done");
    }
    UpdateToDo(e.target.dataset.id, e.target.classList.contains("done"));
}
const UpdateToDo = (id, completed) => {
    fetch(`$\{apiUrl}/${id}`, {
        method: "PUT",
        body:Json.stringify({completed}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json()).then((data) => console.log(data))
}

const init = () =>{ //this is a function but Arrow format

    document.addEventListener("DOMContentLoaded",GetFunction)
    document.querySelector("#todo-form").addEventListener("submit",CreateTodo)
    document.querySelector("#todo-list").addEventListener("click",ToggleCompleted)
}
init();



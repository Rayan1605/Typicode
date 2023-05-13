const apiUrl = "https://jsonplaceholder.typicode.com/todos";

function GetFunction(){
    fetch(apiUrl + '?_limit=5').then((res) => res.json())
        .then((data) => {

           data.forEach((todo) => {
               const div = document.createElement('div');
               div.appendChild(document.createTextNode(todo.title));

           })
        })
}

GetFunction();
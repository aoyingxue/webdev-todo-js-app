// todo list element
const todolist = document.getElementById('todo-list');

// api key
const apiKey = 'abc123'; // API key needed
const apiUrl = 'https://cse204.work/todos';


// UI add to-do list
function addNewToDo(toDoId, toDoItem, toDoComplete) {
    var listItem = '';

    if (toDoComplete == false) {
        // create new to-do item
        listItem = `
        <li class="d-flex justify-content-between align-items-center">
            <p class="text">${toDoItem}</p>
            <span>
                <i class="far fa-circle todo-icon todo-icon-complete" id="circle-${toDoId}"></i>
                <i class="far fa-trash-alt todo-icon todo-icon-delete" id="trash-${toDoId}"></i>
            </span>
        </li>
        `;
        // paste the html element 
        todolist.insertAdjacentHTML('beforeend', listItem);
    } else {
        // create new to-do item
        listItem = `
        <li class="d-flex justify-content-between align-items-center">
            <p class="text checked">${toDoItem}</p>
            <span>
                <i class="far fa-check-circle todo-icon todo-icon-complete" id="circle-${toDoId}"></i>
                <i class="far fa-trash-alt todo-icon todo-icon-delete" id="trash-${toDoId}"></i>
            </span>
        </li>
        `;
        // paste the html element 
        todolist.insertAdjacentHTML('beforeend', listItem);
    }


}

// UI
function completeToDoItem(element) {
    // icons for check and uncheck
    const check = 'fa-check-circle';
    const uncheck = 'fa-circle';

    // toggle classes between check and uncheck
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.parentNode.querySelector('.text').classList.toggle('checked');

}

// UI
function deleteToDoItem(element) {
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
}

// PUT ToDo Updates
function putToDoUpdates(e) {
    e.preventDefault();

    // find the clicked target item
    const element = e.target;

    // get the updated element id
    const elementId = element.id.substring(7,); // id after "circle-"

    // get the updated element completed status
    const elementComplete = element.completed;
    if (elementComplete == true) {
        // data
        var data = {
            completed: false
        }

    } else {
        var data = {
            completed: true
        }
    }
    const elementTypes = element.classList;

    var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            completeToDoItem(element);

        } else if (this.readyState == 4) {
            // this.status !== 200, error from server
            console.log(this.responseText);

        }
    }

    let url = apiUrl.concat(`/${elementId}`);
    xhttp3.open("PUT", url, true);

    xhttp3.setRequestHeader("Content-type", "application/json");
    xhttp3.setRequestHeader("x-api-key", apiKey);
    xhttp3.send(JSON.stringify(data));
    console.log('update successfully!');
}

// DELETE a ToDo
function deleteToDoItem(e) {
    e.preventDefault();

    // find the clicked target item
    const element = e.target;

    // get the updated element id
    const elementId = element.id.substring(6,); // id after "trash-"

    var xhttp4 = new XMLHttpRequest();

    xhttp4.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);

        } else if (this.readyState == 4) {
            console.log(this.responseText);
        }
    }


    let url = apiUrl.concat(`/${elementId}`);
    xhttp4.open("DELETE", url, true);
    xhttp4.setRequestHeader("x-api-key", apiKey);
    xhttp4.send();
    console.log('delete successfully!');
}


// LIST existing todos when refreshing
function listAllToDos() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var todos = JSON.parse(this.responseText);

            for (i = 0; i < todos.length; i++) {
                let id = todos[i].id;
                let toDoItem = todos[i].text;
                let toDoComplete = todos[i].completed;

                addNewToDo(id, toDoItem, toDoComplete);
            }
        }
    }
    xhttp.open('GET', apiUrl, true);
    xhttp.setRequestHeader("x-api-key", apiKey);
    xhttp.send();
}


// POST a new todo item
function postNewToDo(e) {
    e.preventDefault(); // This prevents the form from reloading the page!

    // Setting variable for form input (get from HTML form)
    let toDoItem = document.getElementById('input').value;

    // if there's any characters in the input
    if (toDoItem) {
        var data = {
            text: toDoItem
        }

        // Initalize AJAX Request
        var xhttp2 = new XMLHttpRequest();

        // Response handler
        xhttp2.onreadystatechange = function () {

            // Wait for readyState = 4 & 200 response
            if (this.readyState == 4 && this.status == 200) {

                // parse JSON response
                var todo = JSON.parse(this.responseText);

                // put todo on 
                addNewToDo(todo.id, toDoItem,false);

                // clear the input
                document.getElementById('input').value = '';

            } else if (this.readyState == 4) {
                // this.status !== 200, error from server
                console.log(this.responseText);

            }
        };

        xhttp2.open("POST", apiUrl, true);

        xhttp2.setRequestHeader("Content-type", "application/json");
        xhttp2.setRequestHeader("x-api-key", apiKey);
        xhttp2.send(JSON.stringify(data));
        console.log('sent successfully!');
    }
}
function completeOrDelete(e) {
    console.log(e.target);
    if (e.target.classList.contains('todo-icon-delete')) {
        console.log('delete');
        deleteToDoItem(e);
    } else if (e.target.classList.contains('todo-icon-complete')) {
        console.log('complete');
        putToDoUpdates(e);
    }
}

// load all to-do items
listAllToDos();

// if press enter, call addNewToDo
const formElement = document.getElementById("todo-form");
formElement.addEventListener("submit", e => postNewToDo(e), false);

// if clicked, complete to-do item or delete
document.addEventListener('click', e => completeOrDelete(e));

// Extra Credit: Provide a way for users to update and save the text of a todo item using the API.

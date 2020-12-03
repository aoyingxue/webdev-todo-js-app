You will create a ToDo app where users can add todos, check off todos as completed, and delete todos. You must use the provided API to list, save, modify, and delete your todos via AJAX in Javascript. 

## Assignment Objectives

- UI Requirements
    - Input area for adding new ToDos
        - May also need "add" button
    - List of ToDos
    - Each ToDo has:
        - Checkbox (or another way of checking off) to complete
        - Name of ToDo
        - Button to delete
    - Style Requirements
        - App should be nicely styled, no elements should look like default HTML elements
        - App should be centered on the page, and liquid layout so it works well on mobile
            - Media queries not required but may be useful
        - New ToDo box should not look like a default input
        - ToDos should be separated from each other somehow
        - ToDo controls (check off, delete) should be nicely styled
- Functionality Requirements
    - Adding a new ToDo can be done both by pressing enter and when clicking a button. This is best accomplished by executing your code when the form is submitted, instead of when the user presses a button.
        - After adding a ToDo, the input area for new ToDos should become blank
        - New ToDos added to list
    - Checking off a ToDo should cause it to stay on the list but be styled differently (maybe strikethrough, or faded, etc)
    - Deleting a ToDo should remove it from the list entirely
- Data Requirements
    - When page loads, existing ToDos are loaded from the server
    - When new ToDo is added, send it to the server
    - When a ToDo is "checked off" or deleted, send that to the server
## API Key
    To interact with the API, you will first need an API Key that will uniquely identify your user. This API key cannot be recovered if you lose it, but you can always generate a new one and you will start with a "clean slate" with no data. Generate an API Key here: http://cse204.work/api-key/
## API Documentation
    The API has been thoroughly documented, along with some examples for interacting with it via javascript. You can view this documentation here: http://cse204.work/todo-api/ (Links to an external site.)

## Javascript Documentation

This assignment will require heavy use of Javascript to interact with the API, write the data to the page, and provide the user interaction. While it is recommended to use plain Javascript, you may also use jQuery, Axios, or another Javascript framework, although keep in mind these frameworks will not be covered as heavily in class and you will be on your own to get them working correctly.

- Javascript DOM Manipulation Resources:
    https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction (Links to an external site.) 
    https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/ (Links to an external site.)
    https://blog.garstasio.com/you-dont-need-jquery/dom-manipulation/ (Links to an external site.)
- Javascript AJAX Resources:
    https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started (Links to an external site.)
    https://www.w3schools.com/xml/ajax_intro.asp (Links to an external site.)
    Parsing JSON: https://www.w3schools.com/js/js_json_intro.asp (Links to an external site.)
- Alternative tools:
    https://jquery.com (Links to an external site.) (note: if using Bootstrap, by default it only includes a "slim" version fo jquery that does not include $.ajax. Make sure you replace the Bootstrap jquery with the full version.
    https://github.com/axios/axios (Links to an external site.) - AJAX alternative
    https://davidwalsh.name/fetch  (Links to an external site.)- AJAX alternative
    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Links to an external site.) - Good Fetch tutorial
## Extra Credit
- Checkboxes act as a "toggle", where clicking the checkbox will invert the todo item's "complete" status.
- Provide a way for users to update and save the text of a todo item using the API.
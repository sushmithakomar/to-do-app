
function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create delete button
    let remove = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // add text to delete button
    remove.textContent = 'Delete';

    // give delete button functionality
    remove.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);
    })

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach delete button to li
    newLi.appendChild(remove);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
}

window.onload = function() {
   onReady();
 };

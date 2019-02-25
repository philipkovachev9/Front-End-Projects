    const todoList = document.getElementById('todoList');
    const form = document.getElementById('form');
    const input = document.getElementById('input');
 
    // Displaying the todos:
     
    function displayTodos(doc) {
    let li = document.createElement('li');
    let task = document.createElement('span');
    let trashIcon = document.createElement('img');
    let editIcon = document.createElement('img');
    
    li.setAttribute('data-id', doc.id);
    task.textContent = doc.data().task;
    li.appendChild(task);
    li.appendChild(trashIcon);
    li.appendChild(editIcon);
    todoList.appendChild(li);
    trashIcon.setAttribute('src', './images/trash.jpg');
    trashIcon.setAttribute('class', 'crud-icon-trash');
    editIcon.setAttribute('src', '../images/edit.png')
    editIcon.setAttribute('class', 'crud-icon-edit')

    // Deleting the todos:
    trashIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('todos').doc(id).delete();
      });
     }

    // Adding the item to the database:
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    if(input.value !== '') {
    db.collection('todos').add({
    task: form.task.value
     });
     input.classList.remove('error-message')
    } else {
     input.classList.add('error-message')
     input.placeholder ='You must enter a todo!'
    }
   });

   // Getting the data from the backend:
   db.collection('todos').onSnapshot(function (snapshot) {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if(change.type == 'added') {
        displayTodos(change.doc);
        } else if(change.type =='removed') {
            let li = todoList.querySelector('[data-id="' + change.doc.id + '"]');
            todoList.removeChild(li);
        }
      });
    });


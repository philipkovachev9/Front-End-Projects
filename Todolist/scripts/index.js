    var button = document.getElementById('add-button');
    button.addEventListener('click', function () {
            
    var item = document.getElementById('input').value;
    var text = document.createTextNode(item);
    var newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('todoList').appendChild(newItem);
        
    var removeTask = document.createElement('img');
    removeTask.setAttribute('src', '/images/trash.jpg');
    removeTask.setAttribute('id', 'trash');
    removeTask.addEventListener('click', function() {
        newItem.parentNode.removeChild(newItem);
    });
    newItem.appendChild(removeTask);
    
});


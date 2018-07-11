document.getElementById('form').addEventListener('submit', validate);

function validate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var message = document.getElementById('msg').value;
    if (name == '' || email == '' || message == '') {
        var error = document.createElement('p').textContent = '*This Field is Required';
        document.getElementById('error_name').innerHTML = error;
        document.getElementById('error_email').innerHTML = error;
        document.getElementById('error_msg').innerHTML = error;
        event.preventDefault();
    }
}
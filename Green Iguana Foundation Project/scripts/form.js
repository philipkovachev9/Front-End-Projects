function validate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var message = document.getElementById('msg').value;
    if (name == "" || email == "" || message == "") {
        alert("All fields are required");
    }
}
    
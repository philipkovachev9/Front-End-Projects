const baseURL = 'https://repti-care-1b396.firebaseio.com/'


const TABLE = $('#animal-list');

$('#btnCreate').on('click', loadAnimals);

function loadAnimals() {
    $.ajax({
        method: 'GET',
        url: baseURL + '.json'
    }).then(handleSuccess)
    
}

function handleSuccess(res) {
  console.log(res)
}
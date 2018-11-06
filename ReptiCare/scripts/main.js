const animalList = document.querySelector('#animal-list');
const form = document.querySelector('#add-animals');


function renderAnimals(doc) {
let tr = document.createElement('tr');
let deleteButton = document.createElement('button');
let name = document.createElement('div');
let species = document.createElement('div');
let age = document.createElement('div');
let last_fed = document.createElement('div');
let last_shed = document.createElement('div');
let diet = document.createElement('div');
let basking_area_temp = document.createElement('div');
let cold_part_temp = document.createElement('div');
let humidity = document.createElement('div');
let additional_info = document.createElement('div');

tr.setAttribute('data-id', doc.id);
name.textContent = `name: ${doc.data().name}`
deleteButton.textContent = 'Delete';
deleteButton.setAttribute('class','btn btn-danger');
species.textContent = `species: ${doc.data().species}`
age.textContent = `age: ${doc.data().age}`
last_fed.textContent = `last fed: ${doc.data().last_fed}`;
last_shed.textContent = `last shed: ${doc.data().last_shed}`;
diet.textContent = `diet: ${doc.data().diet}`;
basking_area_temp.textContent =`basking area temp: ${ doc.data().basking_area_temp}`;
cold_part_temp.textContent =  `cold part temp: ${doc.data().cold_part_temp}`;
humidity.textContent = `humidity: ${doc.data().humidity}`;
additional_info.textContent = `additional info: ${doc.data().additional_info}`;

tr.appendChild(species);
tr.append(name);
tr.append(age);
tr.append(last_fed);
tr.append(last_shed);
tr.append(diet);
tr.append(basking_area_temp);
tr.append(cold_part_temp);
tr.append(humidity);
tr.append(additional_info);
tr.append(deleteButton);

animalList.appendChild(tr);

//deleting data
deleteButton.addEventListener('click', (event) => {
    event.stopPropagation();
    let id = event.target.parentElement.getAttribute('data-id');
    db.collection('animals').doc(id).delete();
})

}

// getting data from the back end
db.collection('animals').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added') {
            renderAnimals(change.doc);
        } else if (change.type == 'removed') {
            let li = animalList.querySelector('[data-id=' + change.doc.id + ']');
            animalList.removeChild(li);
        }
    })
})

// adding data
form.addEventListener('submit', (event) => {
    event.preventDefault();
    db.collection('animals').add({
        species: form.species.value,
        name: form.name.value,
        age: form.age.value,
        last_fed: document.querySelector('#last-fed').value,
        last_shed: document.querySelector('#last-shed').value,
        diet: form.diet.value,
        basking_area_temp: document.querySelector('#basking-area-temperature').value,
        cold_part_temp: document.querySelector('#cold-temperature').value,
        humidity: form.humidity.value,
        additional_info: document.querySelector('#additional-info').value

    })
})



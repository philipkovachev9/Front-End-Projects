const animalList = document.querySelector('#animal-list');
const form = document.querySelector('#add-animals');

function renderAnimals(doc) {
let tr = document.createElement('tr');
let td = document.createElement("td");
let deleteButton = document.createElement('button');
let editButton = document.createElement('button')
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
let editForm = document.createElement("form");
let submit = document.createElement("input"); 
let nameInput = document.createElement("input");
let speciesInput = document.createElement("input");
let ageSpecies = document.createElement("input");
let lastFedInput = document.createElement("input");
let lastShedInput = document.createElement("input");
let dietInput = document.createElement("input");
let baskingAreaTempInput = document.createElement("input");
let coldPartTempInput = document.createElement("input");
let humidityInput = document.createElement("input");
let additionalInfoInput = document.createElement("input");


tr.setAttribute('data-id', doc.id);
name.textContent = `name: ${doc.data().name}`
deleteButton.textContent = 'Delete';
deleteButton.setAttribute('class','btn btn-danger');
editButton.textContent = 'Edit'
editButton.setAttribute('class', 'btn btn-info')
species.textContent = `species: ${doc.data().species}`
age.textContent = `age: ${doc.data().age}`
last_fed.textContent = `last fed: ${doc.data().last_fed}`;
last_shed.textContent = `last shed: ${doc.data().last_shed}`;
diet.textContent = `diet: ${doc.data().diet}`;
basking_area_temp.textContent =`basking area temp: ${ doc.data().basking_area_temp}`;
cold_part_temp.textContent =  `cold part temp: ${doc.data().cold_part_temp}`;
humidity.textContent = `humidity: ${doc.data().humidity}`;
additional_info.textContent = `additional info: ${doc.data().additional_info}`;
editForm.setAttribute('method',"post");
editForm.setAttribute('action',"#");
editForm.setAttribute('class','edit-form')
submit.setAttribute('type',"submit");
submit.setAttribute('value',"Submit");
submit.setAttribute('class',"btn btn-success");

td.appendChild(species);
td.append(age);
td.append(last_fed);
td.append(last_shed);
td.append(diet);
td.append(basking_area_temp);
td.append(cold_part_temp);
td.append(humidity);
td.append(additional_info);
td.append(deleteButton);
td.append(editButton);
td.appendChild(nameInput);
td.append(ageSpecies);
td.append(lastFedInput);
td.append(lastShedInput);
td.append(dietInput);
td.append(baskingAreaTempInput);
td.append(coldPartTempInput);
td.append(humidityInput);
td.append(additionalInfoInput);
tr.appendChild(td);
editForm.appendChild(nameInput);
editForm.append(ageSpecies);
editForm.append(lastFedInput);
editForm.append(lastShedInput);
editForm.append(dietInput);
editForm.append(baskingAreaTempInput);
editForm.append(coldPartTempInput);
editForm.append(humidityInput);
editForm.append(additionalInfoInput);
editForm.append(submit)
td.append(editForm);
tr.appendChild(td);

animalList.appendChild(tr);

//deleting data
deleteButton.addEventListener('click', (event) => {
    event.stopPropagation();
    let id = event.target.parentElement.getAttribute('data-id');
    db.collection('animals').doc(id).delete();
})

editButton.addEventListener('click', () => {
    editForm.setAttribute('class','show')
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



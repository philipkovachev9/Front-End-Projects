const animalList = document.querySelector('#animal-list');
const form = document.querySelector('#add-animals');

function renderAnimals(doc) {
let tr = document.createElement('tr');
let td = document.createElement('td');
let deleteButton = document.createElement('button');
let editButton = document.createElement('button')
// Animal properties
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
// Edit Form inputs and buttons
let editForm = document.createElement('form');
let submit = document.createElement('input'); 
let nameInput = document.createElement('input');
let speciesInput = document.createElement('input');
let ageSpecies = document.createElement('input');
let lastFedInput = document.createElement('input');
let lastShedInput = document.createElement('input');
let dietInput = document.createElement('input');
let baskingAreaTempInput = document.createElement('input');
let coldPartTempInput = document.createElement('input');
let humidityInput = document.createElement('input');
let additionalInfoInput = document.createElement('input');
// Edit modal creation
let modal = document.createElement('div');
let modalDialog = document.createElement('div');
let modalContent = document.createElement('div');
let span = document.createElement('span');
let h2 = document.createElement('h2');
let nameLabel = document.createElement('label');
let speciesLabel = document.createElement('label');
let ageLabel = document.createElement('label');
let lastFedLabel = document.createElement('label');
let lastShedLabel = document.createElement('label');
let dietLabel = document.createElement('label');
let baskingAreaTempLabel = document.createElement('label');
let coldPartTempLabel = document.createElement('label');
let humidityLabel = document.createElement('label');
let additionalInfoLabel = document.createElement('label');

// Class and data setting
td.setAttribute('data-id', doc.id);
name.textContent = `name: ${doc.data().name}`;
deleteButton.textContent = 'Delete';
deleteButton.setAttribute('class','btn btn-danger');
editButton.textContent = 'Edit';
editButton.setAttribute('class', 'btn btn-info');
editForm.setAttribute('class', 'form-group');
modal.setAttribute('id','editModal');
modal.setAttribute('class','modal ');
modal.setAttribute('tabindex', '-1');
modalDialog.setAttribute('class', 'modal-dialog');
modalContent.setAttribute('class','modal-content container');
span.textContent = 'X';
span.setAttribute('class','close');
h2.textContent = 'Edit Animal';
speciesLabel.innerHTML = 'Species:';
nameLabel.innerHTML = 'Name:';
ageLabel.textContent = 'Age:';
lastFedLabel.textContent='Last Fed:';
lastShedLabel.textContent= 'Last Shed:';
dietLabel.textContent = 'Diet:';
baskingAreaTempLabel.textContent = 'Basking temps';
coldPartTempLabel.textContent = 'Cold Part Temps';
humidityLabel.textContent = 'Humidity';
additionalInfoInput.textContent = 'Additional Info';
species.textContent = `species: ${doc.data().species}`;
age.textContent = `age: ${doc.data().age}`;
last_fed.textContent = `last fed: ${doc.data().last_fed}`;
last_shed.textContent = `last shed: ${doc.data().last_shed}`;
diet.textContent = `diet: ${doc.data().diet}`;
basking_area_temp.textContent =`basking area temp: ${ doc.data().basking_area_temp}`;
cold_part_temp.textContent =  `cold part temp: ${doc.data().cold_part_temp}`;
humidity.textContent = `humidity: ${doc.data().humidity}`;
additional_info.textContent = `additional info: ${doc.data().additional_info}`;
editForm.setAttribute('method',"post");
editForm.setAttribute('action',"#");
editForm.setAttribute('class','edit-form');
submit.setAttribute('type',"submit");
submit.setAttribute('value',"Update");
submit.setAttribute('class',"btn btn-success");
nameLabel.setAttribute('for','name');
speciesLabel.setAttribute('for','name');
ageLabel.setAttribute('for','name');
lastFedLabel.setAttribute('for','');
lastShedLabel.setAttribute('for','last shed');
dietLabel.setAttribute('for','diet');
nameInput.setAttribute('class','form-control')
speciesInput.setAttribute('class','form-control');
ageSpecies.setAttribute('class','form-control');
lastFedInput.setAttribute('class','form-control');
lastShedInput.setAttribute('class','form-control');
baskingAreaTempInput.setAttribute('class','form-control');
coldPartTempInput.setAttribute('class','form-control');
humidityInput.setAttribute('class','form-control');
additionalInfoInput.setAttribute('class','form-control');
speciesInput.setAttribute('class','form-control');
dietInput.setAttribute('class','form-control');

//Visualizing the table
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
// td.append(additionalInfoInput);
td.append(speciesInput);
tr.appendChild(td);
editForm.append(nameLabel);
editForm.appendChild(nameInput);
editForm.append(ageLabel);
editForm.append(ageSpecies);
editForm.append(lastFedLabel);
editForm.append(lastFedInput);
editForm.append(lastShedLabel);
editForm.append(lastShedInput);
editForm.append(dietLabel);
editForm.append(dietInput);
editForm.append(baskingAreaTempLabel);
editForm.append(baskingAreaTempInput);
editForm.append(coldPartTempLabel);
editForm.append(coldPartTempInput);
editForm.append(humidityLabel);
editForm.append(humidityInput);
editForm.append(additionalInfoLabel);
// editForm.append(additionalInfoInput);
editForm.append(speciesLabel);
editForm.append(speciesInput);
editForm.append(submit);
td.append(editForm);
tr.appendChild(td);
modal.append(modalDialog);
modalDialog.append(modalContent);
modalContent.append(span);
modalContent.append(h2);
td.append(modal);
modalContent.append(editForm);
animalList.appendChild(tr);

// Firebase operations

//deleting data
deleteButton.addEventListener('click', () => {
    let id = event.target.parentElement.getAttribute('data-id');
    db.collection('animals').doc(id).delete();
    document.location.reload();

})

editButton.addEventListener('click', () => {
    modal.style.display = 'flex';
})

span.addEventListener('click', () => {
    modal.style.display = "none";
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



const animalList = document.querySelector('#animal-list');
const form = document.querySelector('#add-animals');


function renderAnimals(doc) {
let li = document.createElement('li');
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

li.setAttribute('data-id', doc.id);
name.textContent = `name: ${doc.data().name}`
species.textContent = `species: ${doc.data().species}`
age.textContent = `age: ${doc.data().age}`
last_fed.textContent = `last fed: ${doc.data().last_fed}`;
last_shed.textContent = `last shed: ${doc.data().last_shed}`;
diet.textContent = `diet: ${doc.data().diet}`;
basking_area_temp.textContent =`basking area temp: ${ doc.data().basking_area_temp}`;
cold_part_temp.textContent =  `cold part temp: ${doc.data().cold_part_temp}`;
humidity.textContent = `humidity: ${doc.data().humidity}`;
additional_info.textContent = `additional info: ${doc.data().additional_info}`;

li.appendChild(species);
li.append(name);
li.append(age);
li.append(last_fed);
li.append(last_shed);
li.append(diet);
li.append(basking_area_temp);
li.append(cold_part_temp);
li.append(humidity);
li.append(additional_info);

animalList.appendChild(li);
}

// getting data from the back end
db.collection('animals').get().then((snapshot) => {
snapshot.docs.forEach(doc => {
    renderAnimals(doc);
  })
})
// adding data
form.addEventListener('submit', (event) => {
    event.preventDefault();
    db.collection('animals').add({
        species: form.species.value,
        name: form.name.value,
        age: form.age.value,
        last_fed: document.querySelector("#last-fed").value,
        last_shed: document.querySelector("#last-shed").value,
        diet: form.diet.value,
        basking_area_temp: document.querySelector("#basking-area-temperature").value,
        cold_part_temp: document.querySelector("#cold-temperature").value,
        humidity: form.humidity.value,
        additional_info: document.querySelector("#additional-info").value

    })
})
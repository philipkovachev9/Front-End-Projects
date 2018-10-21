// Constants, baseURL and needed input elements
const baseURL = 'https://repti-care-1b396.firebaseio.com/animals';
const SPECIES = $('#species');
const NAME = $('#name');
const AGE = $('#age');
const LAST_FED = $('#last-fed');
const LAST_SHED = $('#last-shed');
const DIET = $('#diet');
const BASKING_AREA_TEMPERATURE = $('#basking-area-temperature');
const COLD_PART_TEMPERATURE = $('#cold-temperature');
const HUMIDITY = $('#humidity');
const ADDITIONAL_INFO = $('#additional-info');
const TABLE = $('#animal-list');

$('#btnCreate').on('click', createAnimal);
$('#btnLoad').on('click', loadAnimals)

function createAnimal() {
    let species = SPECIES.val();
    let name = NAME.val();
    let age = AGE.val();
    let last_fed = LAST_FED.val();
    let last_shed = LAST_SHED.val();
    let diet = DIET.val();
    let basking_area_temperature = BASKING_AREA_TEMPERATURE.val();
    let cold_part_temperature = COLD_PART_TEMPERATURE.val();
    let humidity = HUMIDITY.val();
    let additional_info = ADDITIONAL_INFO.val();

    if (species.trim() !== '' && name.trim() !== '' && age.trim() !== '' && last_fed !== '' && last_shed !== '' && diet !== '' && basking_area_temperature !== '' && cold_part_temperature !== '' && humidity !== '' && additional_info !== '') {
        $.ajax({
            method: 'POST',
            url: baseURL + '.json',
            data: JSON.stringify({ species, name, age, last_fed, last_shed, diet, basking_area_temperature, cold_part_temperature, humidity, additional_info })
        }).then(function (res) {
            console.log(res);
        }).catch(handleError);
    }

}

function loadAnimals() {
    $.ajax({
        method: 'GET',
        url: baseURL + '.json'
    }).then(appendAnimals).catch(handleError)
}

function appendAnimals(animals) {
    TABLE.empty();
    for (const key in animals) {
        const li = $('<li></li>');
        const button = $('<button>Delete</button>');
        li.text(`Name:${animals[key].name} Species: ${animals[key].species} Age: ${animals[key].age} Last Fed: ${animals[key].last_fed} Last Shed: ${animals[key].last_shed} Diet: ${animals[key].diet} Basking Area Temperature: ${animals[key].basking_area_temperature} Cold Side Temperature: ${animals[key].cold_part_temperature} Humidity: ${animals[key].humidity} Additional Info: ${animals[key].additional_info} `)
        li.append(button);
        TABLE.append(li)
    }
}


function handleError(error) {
    console.log(error)
}

// Constants, baseURL and needed input elements
const baseURL = 'https://repti-care-1b396.firebaseio.com/';
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

function handleError(error) {
    console.log(error)
}
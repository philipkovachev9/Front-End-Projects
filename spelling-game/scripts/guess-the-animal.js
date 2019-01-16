var sounds = [
  new Audio('../sounds/Horse-neigh.mp3'),
  new Audio('../sounds/grizzlybear.mp3'),
  new Audio('../sounds/Goat-noise.mp3'),
]

var player = document.getElementById('player');
var enteredWord = document.getElementById('entered-word');

//Todo: Make a function that plays one random mp3 from the array and check if the input matches the animal
player.addEventListener('click', function() {
  var sound = sounds[Math.floor(Math.random() * sounds.length)];
  sound.play();
})

enteredWord.addEventListener('keydown', function() {
  if(event.key === 'Enter') {
    alert(enteredWord.value);        
}
})
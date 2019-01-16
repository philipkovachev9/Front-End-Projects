var words = [
  {
    word: 'horse',
    sound: '../sounds/Horse-neigh.mp3'
  },
  {
    word: 'goat',
    sound: '../sounds/Goat-noise.mp3'
  },
  {
    word: 'bear',
    sound: '../sounds/grizzlybear.mp3'
  },
]

var player = document.getElementById('player');
var enteredWord = document.getElementById('entered-word');

//Todo: Make element play random sounds onclick
player.addEventListener('click', function() {
 words.forEach(element => {
  alert(element.sound) 
 });
})

//Todo: check if the entered word matches the sound
enteredWord.addEventListener('keydown', function() {
  if(event.key === 'Enter') {
    alert(enteredWord.value);        
}
})
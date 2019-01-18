var sounds = [
  {
    animalType: 'horse',
    sound: new Audio('../sounds/Horse-neigh.mp3')
  },
  {
    animalType: 'bear',
    sound: new Audio('../sounds/grizzlybear.mp3')
  },
  {
    animalType: 'goat',
    sound: new Audio('../sounds/Goat-noise.mp3'),
  }
]

var player = document.getElementById('player');
var enteredWord = document.getElementById('entered-word');
var counter = document.getElementById('counter-score');
var errorMessage = document.getElementById('error-message');

startGame();

function startGame() {
    var currentSound;
    player.addEventListener('click', function() {
    var sound = sounds[Math.floor(Math.random()*sounds.length)];
    currentSound = sound.animalType;
    sound['sound'].play();
  })


  enteredWord.addEventListener('keydown', function() {
    if(event.key === 'Enter') {
      if(enteredWord.value === currentSound) {
        counter.textContent ++;
      }
    }
  })
}
  



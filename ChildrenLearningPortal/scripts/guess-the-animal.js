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
  },
  {
    animalType: 'cat',
    sound: new Audio('../sounds/cat.mp3')
  },
  {
    animalType: 'dog',
    sound: new Audio('../sounds/dog-bark.mp3')
  },
  {
    animalType: 'sheep',
    sound: new Audio('../sounds/sheep.mp3')
  },
  {
    animalType: 'rooster',
    sound: new Audio('../sounds/rooster.mp3')
  },
  {
    animalType: 'lion',
    sound: new Audio('../sounds/lion.mp3')
  },
  {
    animalType: 'hen',
    sound: new Audio('../sounds/hen.mp3')
  }
]

var player = document.getElementById('player');
var enteredWord = document.getElementById('entered-word');
var counter = document.getElementById('counter-score');
var errorMessage = document.getElementById('error-message');
var playAgainButton = document.getElementById('win-message');
var wrongAnswerSound = new Audio('../sounds/Wrong-answer-sound-effect.mp3');
var winSound = new Audio('../sounds/win-sound.mp3');
var guessedAnimal = false;
var correctGuesses = 0;

function startGame() {
  var currentSound;
    player.addEventListener('click', function() {
    var sound = sounds[Math.floor(Math.random()*sounds.length)];
    currentSound = sound.animalType;
    sound['sound'].play();
    enteredWord.disabled = false;
  })
    
  enteredWord.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
      if(enteredWord.value.toLowerCase() === currentSound) {
        guessedAnimal = true;
        correctGuesses +=1;
        console.log(correctGuesses);
        counter.textContent ++;
        errorMessage.style.display = 'none';
        enteredWord.classList.remove('input-error-border');
        enteredWord.disabled = true;
        if(correctGuesses === 9) {
        document.getElementById('win-message').style.display = 'block';
        player.style.display = 'none'
        winSound.play();
        }
      } else {
        errorMessage.style.display = 'inline-block';
        enteredWord.classList.add('input-error-border');
        enteredWord.disabled = false;
        wrongAnswerSound.play();
      }  
    } 
  })

playAgainButton.addEventListener('click', function() {
location.reload();
})
}
  
startGame();
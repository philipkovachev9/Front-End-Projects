const cardsArray = [
    {
        'name': 'card1',
        'img': './images/1.jpeg',
    },
    {
        'name': 'card2',
        'img': './images/2.jpeg',
    },
    {
        'name': 'card3',
        'img': './images/3.jpg',
    },
    {
        'name': 'card4',
        'img': './images/4.jpeg',
    },
    {
        'name': 'card5',
        'img': './images/5.jpg',
    },
    {
        'name': 'card6',
        'img': './images/6.jpg',
    },
    {
        'name': 'card7',
        'img': './images/7.jpeg',
    },
    {
        'name': 'card8',
        'img': './images/8.jpg',
    },
    {
        'name': 'card9',
        'img': './images/9.jpeg',
    },
    {
        'name': 'card10',
        'img': './images/10.jpg',
    },
    {
        'name': 'card11',
        'img': './images/11.jpeg',
    },
    {
        'name': 'card12',
        'img': './images/12.jpg',
    },
]

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let count = 0;

// Grab the root element, create a grid, set the class grid and append it
const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

//For each items in the array, create a card, change the class and dataset, then append it
gameGrid.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;
  grid.appendChild(card);
});

//Create an onclick event, match only two cards
grid.addEventListener('click', function (event) {
  let clicked = event.target;
  if (clicked.nodeName === 'SECTION') { return; }
  if (count < 2) {
    count++;
    clicked.classList.add('selected');
  }
});


  

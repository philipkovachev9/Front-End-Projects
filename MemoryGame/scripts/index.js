const cardsArray = [
    {
        'name': 'card1',
        'img' : './images/1.jpeg',
    },
    {
        'name': 'card2',
        'img' : './images/2.jpeg',
    },
    {
        'name': 'card3',
        'img' : './images/3.jpg',
    },
    {
        'name': 'card4',
        'img' : './images/4.jpeg',
    },
    {
        'name': 'card5',
        'img' : './images/5.jpg',
    },
    {
        'name': 'card6',
        'img' : './images/6.jpg',
    },
    {
        'name': 'card7',
        'img' : './images/7.jpeg',
    },
    {
        'name': 'card8',
        'img' : './images/8.jpg',
    },
    {
        'name': 'card9',
        'img' : './images/9.jpeg',
    },
    {
        'name': 'card10',
        'img' : './images/10.jpg',
    },
    {
        'name': 'card11',
        'img' : './images/11.jpeg',
    },
    {
        'name': 'card12',
        'img' : './images/12.jpg',
    },
]
// Concatinating array, sorting it and adding classes
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());
const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

// Foreaching and displaying items from the array
gameGrid.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card');
    card.dataset.name = item.name;
    card.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
  });

  grid.addEventListener('click', function(event) {
    let clicked = event.target;
    // Do not allow the grid section to be selected, only the divs inside
    if(clicked.nodeName === 'SECTION') {return}
    clicked.classList.add('selected');
  });
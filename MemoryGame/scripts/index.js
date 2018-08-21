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

// Grabbing the div with id of root
const game = document.getElementById('game');

// Creating a grid and setting a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

//Appending the grid section to the game div
game.appendChild(grid);

// For each item in the cardsArray array...
cardsArray.forEach(item => {
    // Create a div
    const card = document.createElement('div');
  
    // Apply a card class to that div
    card.classList.add('card');
  
    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name;
  
    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`;
  
    // Append the div to the grid section
    grid.appendChild(card);
  });
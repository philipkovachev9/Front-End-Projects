var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 700,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: {y: 500},
          debug: false
      },
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('background', './assets/star-background.jpg');
  this.load.image('player', './assets/spaceship.png');
}

function create() {
  this.add.image(400, 300, 'background');
  this.add.image(400,600, 'player');

}

function update() {

}
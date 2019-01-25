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
var player;
var background;
var cursors;
var bank;


function preload() {
  this.load.image('background', './assets/star-background.jpg');
  this.load.image('player', './assets/spaceship.png');
}

function create() {
  background = this.add.image(400, 300, 'background');
  player = this.physics.add.sprite(400,600, 'player');
  player.setCollideWorldBounds(true);
  bank = player.body.velocity.x;
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  player.body.velocity.setTo(15, 25);

if(cursors.right.isDown) {
  player.body.velocity.x = -350;
 } 
 else if(cursors.left.isDown) {
  player.body.velocity.x = 350;
 } else if (cursors.up.isDown ) {
  player.setVelocityY(-360);
 } else if (cursors.down.isDown) {
  player.body.velocity.y = 300;
 }
}

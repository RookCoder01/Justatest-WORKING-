class scene1 extends Phaser.Scene {
  constructor() {
    super({key: "scene1.js"});
  }
  preload() {
    this.load.image('Roofing-sky-background.jpg', 'assets/Roofing-sky-background.jpg');
    this.load.image('platform.png', 'assets/platform.png');
    this.load.spritesheet('spritesheet.png', 'assets/spritesheet.png', {
      frameWidth: 32,
      frameHeight: 20
    });

  }

  create() {

    this.add.image(400, 300, 'Roofing-sky-background.jpg');
   /* this.add.sprite(400, 568, 'platform.png');
    this.add.spritesheet(80,  340, 'spritesheet.png'); */



      platforms = this.physics.add.staticGroup();

      platforms.create(400, 568, 'platform.png').setScale(2).refreshBody();

      platforms.create(600,400, 'platform.png');

      platforms.create(50, 250, 'platform.png');

      platforms.create(750, 220, 'platform.png');

      player = this.physics.add.sprite(100, 350, 'spritesheet.png');

      player.setBounce(0.2);
      player.setCollideWorldBounds(true);

        this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('spritesheet.png', {
            start: 6, end: 8
          }),
          frameRate: 20,
          repeat: -1
        });
    this.anims.create({
      key: 'turn',
      frames: [{key: 'spritesheet.png', frame: 1}],
      frameRate: 20
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('spritesheet.png', {
        start: 10, end: 12
      }),
      frameRate: 20,
      repeat: -1
    });
    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(player, platforms);
  }

  update() {
    if (cursors.left.isDown)
    {
      player.setVelocityX(-160);

      player.anims.play('left', true);
  }
  else if (cursors.right.isDown)
  {
    player.setVelocityX(160);

    player.anims.play('right', true);
  }
  else
  {
      player.setVelocityX(0);

      player.anims.play('turn');
  }
  if (cursors.up.isDown && player.body.touching.down)
  {
    player.setVelocityY(-330);
  }
}}

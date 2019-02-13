import GameObject from './object.js';

class CharacterObject extends GameObject {
  constructor(canvasWidth, canvasHeight, ctx) {
    super(canvasWidth, canvasHeight);
    this.draw = this.draw.bind(this);
    this.context = ctx;
    this.width = 35;
    this.height = 50;
    this.dead = false;
    this.count = 0;
    this.collected = 0;
    this.upPressed = false;
    this.downPressed = false;
    this.leftPressed = false;
    this.rightPressed = false;
    this.spacePressed = false;
    this.explosionSound = new Audio();
    this.explosionSound.src = "assets/explosion.mp3";
    this.explosionDone = false;
    this.character = new Image();
    this.character.src = "assets/3DS - Regular Show Mordecai and Rigby in 8-Bit Land - Garrett Bobby Ferguson Jr Suit.png";
    this.explosionImage = new Image();
    this.explosionImage.src = "assets/exp2_0.png";
    this.explodeNoise = this.explodeNoise.bind(this);
    this.gameMusic = new Audio();
    this.gameMusic.src = "assets/8bit havoc.mp3";
    this.startMusic = this.startMusic.bind(this);
    this.stopMusic = this.stopMusic.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
    this.drawExplosion = this.drawExplosion.bind(this);
    this.mute = this.mute.bind(this);
    this.unmute = this.unMute.bind(this);
    this.reset = this.reset.bind(this);
  }

  startMusic() {
    this.gameMusic.currentTime = 0;
    this.gameMusic.play();
  }

  stopMusic() {
    this.gameMusic.pause();
  }

  mute() {
    this.explosionSound.volume = 0;
    this.gameMusic.volume = 0;
  }

  unMute() {
    this.explosionSound.volume = 0.5;
    this.gameMusic.volume = 0.5;
  }

  drawExplosion() {
    if (this.count === 0) {
      this.stopMusic();
      this.explodeNoise();
      this.count += 1;
    } else if (this.count < 30) {
      this.context.drawImage(this.explosionImage,0,0,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 60) {
      this.context.drawImage(this.explosionImage,0,65,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 90) {
      this.context.drawImage(this.explosionImage,0,130,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 120) {
      this.context.drawImage(this.explosionImage,0,195,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else {
      this.explosionDone = true;
      return null;
    }
  }

  checkCollision(object) {
    const playerHitbox = this.hitbox();
    const objectHitbox = object.hitbox();
    {
      if (
        playerHitbox.x1 < objectHitbox.x2 &&
        playerHitbox.x2 > objectHitbox.x1 &&
        playerHitbox.y1 < objectHitbox.y2 &&
        playerHitbox.y2 > objectHitbox.y1 &&
        object.harmful === true
      ) {
        this.dead = true;
        return true;
      } else if (
        playerHitbox.x1 < objectHitbox.x2 &&
        playerHitbox.x2 > objectHitbox.x1 &&
        playerHitbox.y1 < objectHitbox.y2 &&
        playerHitbox.y2 > objectHitbox.y1 &&
        object.harmful === false
      ) {
        object.collected = true;
      }
    }
  }

  explodeNoise() {
    this.explosionSound.currentTime = 1;
    this.explosionSound.play();
  }


  hitbox() {
    return {
      x1: this.x + 5,
      x2: this.x + 25,
      y1: this.y + 5,
      y2: this.y + 40
    };
  }

  reset() {
    this.x = 50;
    this.y = 50;
    this.dead = false;
    this.explosionDone = false;
    this.count = 0;
    this.collected = 0;
  }

  draw() {
    if (this.dead) {
      this.drawExplosion();
    } else {
      if (this.upPressed && this.y < 545) {
        this.y += 7;
      } else if (this.downPressed && this.y > 15) {
        this.y -= 7;
      } else if (this.rightPressed && this.x < 950) {
        this.x += 7;
      } else if (this.leftPressed && this.x > 10) {
        this.x -= 7;
      }
      if (!this.downPressed && !this.upPressed && !this.leftPressed && !this.rightPressed) {
        this.context.drawImage(this.character,100,420,55,90,this.x,this.y, 35, 50);
      } else if (this.downPressed) {
        this.context.drawImage(this.character,5,180,55,90,this.x,this.y, 35, 50);
      } else if (this.upPressed) {
        this.context.drawImage(this.character,5,250,55,90,this.x,this.y, 35, 50);
      } else if (this.rightPressed) {
        this.context.drawImage(this.character,120,80,55,90,this.x,this.y, 35, 50);
      } else if (this.leftPressed) {
        this.context.drawImage(this.character,5,420,55,90,this.x,this.y, 35, 50);
      }
    }
  }
}

export default CharacterObject;

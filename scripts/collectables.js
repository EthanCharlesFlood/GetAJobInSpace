import GameObject from './object.js';

class Collectable extends GameObject {
  constructor(canvasWidth, canvasHeight, ctx) {
    super(canvasWidth, canvasHeight);
    this.context = ctx;
    this.collected = false;
    this.dx = 10;
    this.count = 0;
    this.referral = new Image();
    this.referral.src = "assets/imageedit_3_7734021827.png";
    this.collected = false;
    this.harmful = true;
    this.collectionImage = new Image();
    this.collectionImage.src = "assets/112425.png";
    this.collectionNoise = "assets/131660__bertrof__game-sound-correct.wav";
  }

  hitbox() {
    return {
      x1: this.x,
      x2: this.x + 50,
      y1: this.y,
      y2: this.y + 50,
    };
  }

  drawCollection() {
    if (this.count === 0) {
      this.collectNoise();
      this.count += 1;
    } else if (this.count < 15) {
      this.context.drawImage(this.collectionImage,0,0,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 30) {
      this.context.drawImage(this.collectionImage,0,65,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 45) {
      this.context.drawImage(this.collectionImage,0,130,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 60) {
      this.context.drawImage(this.collectionImage,0,195,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 75) {
      this.context.drawImage(this.collectionImage,0,195,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 90) {
      this.context.drawImage(this.collectionImage,0,195,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 105) {
      this.context.drawImage(this.collectionImage,0,195,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 120) {
      this.context.drawImage(this.collectionImage,0,195,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else {
      return null;
    }
  }

  reset() {
    this.x = 1000;
    this.y = 500;
  }


  draw() {
    if (this.x < -200) {
      this.x = 1000 + Math.floor(Math.random() * 500);
    }
    if (this.collected === false) {
      this.x -= 0;
      this.y -= 0;
      this.context.drawImage(this.referral,200,5,62,60,this.x,this.y,60,60);
    } else if (this.collected === true) {

    }

  }
}

export default Collectable;

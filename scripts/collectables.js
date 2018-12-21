import GameObject from './object.js';

class Collectable extends GameObject {
  constructor(canvasWidth, canvasHeight, ctx) {
    super(canvasWidth, canvasHeight);
    this.context = ctx;
    this.collected = false;
    this.dx = 10;
  }

  hitbox() {
    return {
      x1: this.x,
      x2: this.x + 50,
      y1: this.y,
      y2: this.y + 50,
    };
  }

  reset() {
    this.x = 1000;
    this.y = Math.floor( Math.random() * 600 );
  }

  draw() {
    if (this.x < -200) {
      this.x = 1000 + Math.floor(Math.random() * 500);
    }
    this.x -= 4;
    this.y -= this.dy;
    this.context.drawImage(this.enemy,200,5,62,60,this.x,this.y,60,60);
  }
}

export default Collectable;

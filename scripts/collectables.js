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
      y1: this.y + 15,
      y2: this.y + 50,
    };
  }

  draw() {

  }
}

export default Collectable;

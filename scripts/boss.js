import GameObject from './object.js';

export class Boss extends GameObject {
  constructor() {
    this.width = null;
    this.height = null;
    this.vanquished = false;
    this.hp = 1;
  }

  attack() {
    
  }

  hitbox() {
    return {
      x1: this.x + 5,
      x2: this.x + 25,
      y1: this.y + 5,
      y2: this.y + 40
    };
  }

  draw() {

  }



}

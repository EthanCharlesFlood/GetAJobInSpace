import GameObject from './object.js';

class Obstacle extends GameObject {
  constructor(canvasWidth, canvasHeight, ctx) {
    super(canvasWidth, canvasHeight);
    this.context = ctx;
    this.obstacleWords = [
                        ["REJECTED", 50],
                        ["HIRING FREEZE", 160],
                        ["BAD CULTURAL FIT", 220],
                        ["UNDER-QUALIFIED", 220],
                        ["'DIFFERENT DIRECTION'", 341],
                        ["GET OUT OF MY OFFICE", 280],
                        ["THE POSITION HAS BEEN FILLED", 400],
                        ["PLEASE DON'T CONTACT US AGAIN", 444],
                        ["WHO REFERED YOU?", 280]];
    this.y = Math.floor( Math.random() * 600 );
    this.wordArr = this.obstacleWords[Math.floor(Math.random() * 8)];
    this.word = this.wordArr[0];
    this.dx = Math.floor( Math.random() * 5) + 4;
    this.dy = [5,-5, 0, 0][Math.floor(Math.random() * 3)];
    this.vector = [1,-1][Math.floor(Math.random() * 2)];
    this.draw = this.draw.bind(this);
  }

  hitbox() {
    return {
      x1: this.x,
      x2: this.x + this.wordArr[1],
      y1: this.y,
      y2: this.y + 15,
    };
  }

  reset() {
    this.x = 1000;
    this.y = Math.floor( Math.random() * 600 );
    this.wordArr = this.obstacleWords[Math.floor(Math.random() * 8)];
    this.vector = [1,-1][Math.floor(Math.random() * 2)];
    this.dx = Math.floor( Math.random() * 5) + 4;
  }

  draw() {
    if (this.x < -500) {
      this.x = 1000;
      this.y = Math.floor( Math.random() * 600 );
      this.wordArr = this.obstacleWords[Math.floor(Math.random() * 8)];
      this.word = this.wordArr[0];
      this.vector = [1,-1][Math.floor(Math.random() * 2)];
      this.dx = Math.floor( Math.random() * 5) + 5;
      this.dy = [2,-2, 0, 0][Math.floor(Math.random() * 3)];
    }
    if (this.y <= 25 && this.dy !== 0 && this.dy > 0) {
      this.dy = this.dy * -1;
    } else if (this.y >= 580 && this.dy !== 0 && this.dy < 0) {
      this.dy = this.dy * -1;
    }
    this.x -= this.dx;
    this.y -= this.dy;
    this.context.beginPath();
    this.context.fillText(this.word, this.x, this.y);
    this.context.fillStyle = "#ff0000";
    this.context.closePath();
  }
}

export default Obstacle;

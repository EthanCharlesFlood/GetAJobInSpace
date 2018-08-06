import GameObject from "./object.js";

class BackgroundObject extends GameObject {
  constructor(canvasWidth,canvasHeight, ctx) {
    super(canvasWidth, canvasHeight);
    this.context = ctx;
    this.speed = 1;
    this.draw = this.draw.bind(this);
    this.background = new Image();
    this.background.src = "../assets/Starfield-4_1000x600.jpg";
  }

  draw() {
    this.x += this.speed;
    this.context.drawImage(this.background, this.x, this.y);
    this.context.drawImage(this.background, this.x - this.canvasWidth, this.y);

    if (this.x >= this.canvasWidth) {
      this.x = 0;
    }
  }
}

export default BackgroundObject;

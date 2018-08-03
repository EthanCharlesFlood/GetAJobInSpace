class GameObject {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.canvasHeight = 600;
    this.canvasWidth = 1000;
    this.context = ctx;
  }

  draw() {
  }
}

export default GameObject;

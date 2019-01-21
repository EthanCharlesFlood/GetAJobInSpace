class Tutorial {
  constructor(context,enemy,collectable) {
    this.context = context;
    this.draw = this.draw.bind(this);
    this.counter = 0;
    this.done = false;
    this.enemy = enemy;
    this.obstacle = obstacle;
    this.collectable = collectable;
    this.upPressed = false;
    this.downPressed = false;
    this.leftPressed = false;
    this.rightPressed = false;
  }

  demoEnemy() {
    this.enemy.draw();
  }

  demoCollect() {
    this.collectable.draw();
  }

  draw() {
    if (this.counter < 100) {
      this.context.beginPath();
      this.context.fillText("Navigate with the arrow keys.", 330, 400);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      if (this.upPressed === true || this.downPressed == true || this.leftPressed == true || this.rightPressed == true) {
        this.counter += 1;
      }
    } else if (this.counter < 150) {
      this.context.beginPath();
      this.context.fillText("Dodge enemies and obstacles.", 330, 400);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      this.demoEnemy();
    } else if (this.counter < 200) {
      this.context.beginPath();
      this.context.fillText("Collect opportunities as they appear.", 330, 400);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      this.demoCollect();
    } else {
      this.done = true;
    }
  }
}

export default Tutorial;

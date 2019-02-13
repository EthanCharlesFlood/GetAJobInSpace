class Tutorial {
  constructor(context, pc, enemy, obstacle, collectable) {
    this.context = context;
    this.draw = this.draw.bind(this);
    this.reset = this.reset.bind(this);
    this.counter = 0;
    this.done = false;
    this.enemy = enemy;
    this.pc = pc;
    this.obstacle = obstacle;
    this.collectable = collectable;
    this.upPressed = false;
    this.downPressed = false;
    this.leftPressed = false;
    this.rightPressed = false;
  }

  demoEnemy() {
    this.pc.checkCollision(this.obstacle);
    this.pc.checkCollision(this.enemy);
    this.enemy.draw();
    this.obstacle.draw();
  }

  demoCollect() {
    this.collectable.draw();
    this.pc.checkCollision(this.collectable);
  }

  reset() {
    this.counter = 0;
    this.pc.reset();
    this.enemy.reset();
    this.obstacle.reset();
    this.collectable.reset();
  }

  draw() {
    if (this.pc.dead && this.pc.explosionDone) {
      this.pc.reset();
    }
    if (this.counter < 500) {
      this.context.beginPath();
      this.context.fillText("Navigate with the arrow keys.", 320, 200);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      if (this.upPressed === true || this.downPressed == true || this.leftPressed == true || this.rightPressed == true) {
        this.counter += 1;
      }
    } else if (this.counter < 1000) {
      this.context.beginPath();
      this.context.fillText("Dodge enemies and obstacles.", 320, 200);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      this.demoEnemy();
      this.counter += 1;
    } else if (this.counter === 1250) {
      this.enemy.reset();
      this.obstacle.reset();
    } else if (this.pc.collected < 4) {
      this.context.beginPath();
      this.context.fillText("Collect applications as they appear.", 280, 50);
      this.context.closePath();
      this.context.beginPath();
      this.context.fillText("As you collect more more enemies will appear,", 225, 100);
      this.context.closePath();
      this.context.beginPath();
      this.context.fillText("and enemies will become more difficult to avoid.", 220, 150);
      this.context.closePath();
      this.context.beginPath();
      this.context.fillText("Collect enough and live long enough to get a job in space.", 170, 200);
      this.context.closePath();
      this.demoCollect();
    } else {
      this.done = true;
      this.reset();
    }
  }
}

export default Tutorial;

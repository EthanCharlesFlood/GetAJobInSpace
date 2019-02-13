class Tutorial {
  constructor(context, pc, enemy, obstacle, collectable) {
    this.context = context;
    this.draw = this.draw.bind(this);
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
    this.enemy.draw();
    this.obstacle.draw();
  }

  demoCollect() {
    this.collectable.draw();
  }

  draw() {
    if (this.pc.dead && this.pc.explosionDone) {
      this.pc.reset();
    }
    if (this.counter < 100) {
      this.context.beginPath();
      this.context.fillText("Navigate with the arrow keys.", 330, 400);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      if (this.upPressed === true || this.downPressed == true || this.leftPressed == true || this.rightPressed == true) {
        this.counter += 1;
      }
    } else if (this.counter < 1000) {
      this.context.beginPath();
      this.context.fillText("Dodge enemies and obstacles.", 330, 400);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      this.demoEnemy();
      this.counter += 1;
    } else if (this.counter < 1250) {
      this.context.beginPath();
      this.context.fillText("Collect opportunities as they appear.", 330, 400);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      this.demoCollect();
    } else {
      this.context.beginPath();
      this.context.fillText("Do your best and you may just earn a job in space!.", 330, 400);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      this.context.beginPath();
      this.context.fillText("Press space to begin your jobsearch!.", 330, 400);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
    }
  }
}

export default Tutorial;

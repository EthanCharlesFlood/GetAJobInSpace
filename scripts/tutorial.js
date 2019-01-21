class Tutorial {
  constructor(context) {
    this.context = context;
    this.draw = this.draw.bind(this);
    this.counter = 0;
    this.done = false;
    this.enemy = enemy;
    this.collectable = collectable;
  }

  left() {
    this.counter += 1;
  }

  right() {
    this.counter += 1;
  }

  up() {
    this.counter += 1;
  }

  down() {
    this.counter += 1;
  }

  demoEnemy() {
    this.enemy.draw();
  }

  demoCollect() {
    this.collectable.draw();
  }

  draw() {
    if (this.counter < 15) {
      this.context.beginPath();
      this.context.fillText("Press left to move left.", 330, 400);
      this.context.fillStyle = "#ff0000";
      this.context.closePath();
    } else if (this.counter < 30) {
      this.context.beginPath();
      this.context.fillText("Press right to move right.", 330, 400);
      this.context.fillStyle = "#ff0000";
      this.context.closePath();
    } else if (this.counter < 45) {
      this.context.beginPath();
      this.context.fillText("Press up to move up", 330, 400);
      this.context.fillStyle = "#ff0000";
      this.context.closePath();
    } else if (this.counter < 60) {
      this.context.beginPath();
      this.context.fillText("Press down to move down.", 330, 400);
      this.context.fillStyle = "#ff0000";
      this.context.closePath();
    } else if (this.counter < 75) {
      this.context.beginPath();
      this.context.fillText("Dodge enemies and obstacles.", 330, 400);
      this.context.fillStyle = "#ff0000";
      this.context.closePath();
      this.demoEnemy();
    } else if (this.counter < 100) {
      this.context.beginPath();
      this.context.fillText("Collect opportunities as they appear.", 330, 400);
      this.context.fillStyle = "#ff0000";
      this.context.closePath();
      this.demoCollect();
    } else {
      this.done = true;
    }
  }
}

export default Tutorial;

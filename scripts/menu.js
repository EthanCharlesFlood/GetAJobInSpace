class Menu {
  constructor(context) {
    this.context = context;
    this.draw = this.draw.bind(this);
    this.selector = 0;
  }

  up() {
    if (this.selector === 0) {
      this.selector = 1;
    } else if (this.selector === 1) {
      this.selector = 0;
    }
  }

  down() {
    if (this.selector === 0) {
      this.selector = 1;
    } else if (this.selector === 1) {
      this.selector = 0;
    }
  }

  draw() {
    this.context.beginPath();
    this.context.fillText("Get a Job", 435, 100);
    this.context.fillStyle = "#ff0000";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("IN SPACE", 430, 200);
    this.context.fillStyle = "#ff0000";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("Press Space to Start the Hunt", 330, 300);
    this.context.fillStyle = "#ff0000";
    this.context.closePath();
    if (this.selector === 0) {
      this.context.beginPath();
      this.context.fillText("PLAY", 450, 400);
      this.context.fillStyle = "#ff0000";
      this.context.closePath();
    } else if (this.selector === 1) {
      this.context.beginPath();
      this.context.fillText("TUTORIAL", 450, 400);
      this.context.fillStyle = "#ff0000";
      this.context.closePath();
    }
  }
}

export default Menu;

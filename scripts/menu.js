class Menu {
  constructor(context) {
    this.context = context;
    this.draw = this.draw.bind(this);
  }
  draw() {
    this.context.beginPath();
    this.context.fillText("Get a Job", 435, 200);
    this.context.fillStyle = "#ff0000";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("IN SPACE", 430, 300);
    this.context.fillStyle = "#ff0000";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("Press Space to Start the Hunt", 350, 400);
    this.context.fillStyle = "#ff0000";
    this.context.closePath();
  }
}

export default Menu;

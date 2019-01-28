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
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("IN SPACE", 430, 150);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("Navigate space with the arrow keys", 300, 250);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("Avoid rejection notices and bad interviews!", 250, 350);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("Collect job postings and maybe you'll get a job in space!", 200, 450);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("PRESS SPACE TO PLAY", 350, 550);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
  }
}

export default Menu;

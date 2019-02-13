class Menu {
  constructor(context) {
    this.context = context;
    this.draw = this.draw.bind(this);
    this.selector = 1;
    this.pressed = false;
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
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
    if (this.pressed) {
      this.down();
    }
    if (!this.tutorial) {
      this.context.beginPath();
      this.context.fillText("Get a Job", 435, 200);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      this.context.beginPath();
      this.context.fillText("IN SPACE", 430, 250);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      if (this.selector == 1) {
        this.context.beginPath();
        this.context.fillStyle = "red";
        this.context.fillText("Play", 465, 350);
        this.context.fillStyle = "#FFFFFF";
        this.context.closePath();
        this.context.beginPath();
        this.context.fillStyle = "white";
        this.context.fillText("Controls", 443, 440);
        this.context.fillStyle = "#FFFFFF";
        this.context.closePath();
      } else {
        this.context.beginPath();
        this.context.fillStyle = "white";
        this.context.fillText("Play", 465, 350);
        this.context.fillStyle = "#FFFFFF";
        this.context.closePath();
        this.context.beginPath();
        this.context.fillStyle = "red";
        this.context.fillText("Controls", 443, 440);
        this.context.fillStyle = "#FFFFFF";
        this.context.closePath();
      }
    } else {

    }
  }
}

export default Menu;

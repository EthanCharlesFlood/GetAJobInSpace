class Menu {
  constructor(context) {
    this.context = context;
    this.draw = this.draw.bind(this);
    this.selector = 1;
    this.pressed = false;
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.playHitbox = {
      x1: 465,
      x2: 500,
      y1: 350,
      y2: 370
    };
    this.tutorialHitbox = {
      x1: 443,
      x2: 473,
      y1: 440,
      y2: 460
    };
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

  hover() {
    if (true) {
      this.selector = 1;
    } else if (false) {
      this.selector = 0;
    }
  }

  draw() {
    if (this.pressed) {
      this.down();
    }
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
      this.context.fillText("Tutorial", 443, 440);
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
      this.context.fillText("Tutorial", 443, 440);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
    }
  }
}

export default Menu;

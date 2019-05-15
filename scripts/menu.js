import Star from './stars';

class Menu {
  constructor(context) {
    this.context = context;
    this.selector = 1;
    this.pressed = false;
    this.up = this.up.bind(this);
    this.draw = this.draw.bind(this);
    this.down = this.down.bind(this);
    this.isPlay = this.isPlay.bind(this);
    this.isTutorial = this.isTutorial.bind(this);
    this.reset = this.reset.bind(this);
    this.playHitbox = {
      x1: 470,
      x2: 523,
      y1: 336,
      y2: 362,
    };
    this.tutorialHitbox = {
      x1: 449,
      x2: 542,
      y1: 426,
      y2: 445,
    };
    this.stars = [];
    this.populateStars();
  }

  reset() {
    this.selector = 1;
  }

  isPlay(x,y) {
    return (
      this.playHitbox.x1 < x &&
      this.playHitbox.x2 > x &&
      this.playHitbox.y1 < y &&
      this.playHitbox.y2 > y
    );
  }

  isTutorial(x,y) {
    return (
      this.tutorialHitbox.x1 < x &&
      this.tutorialHitbox.x2 > x &&
      this.tutorialHitbox.y1 < y &&
      this.tutorialHitbox.y2 > y
    );
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

  populateStars() {
    for (let i = 0; i < 24; i++) {
      let size = Math.random() * 2 + 1;
      let opacity = Math.random();
      let star = new Star(1000,600,this.context,opacity,size);
      this.stars.push(star);
    }
  }

  drawStars() {
    for (let i = 0; i < this.stars.length; i++) {
      let star = this.stars[i];
      star.draw();
    }
  }

  draw() {
    // this.drawStars();
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

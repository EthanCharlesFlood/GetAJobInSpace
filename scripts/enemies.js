import GameObject from "./object.js";

export class EnemyObject extends GameObject {
  constructor(canvasWidth, canvasHeight, ctx) {
    super(canvasWidth, canvasHeight);
    this.draw = this.draw.bind(this);
    this.context = ctx;
    this.y = Math.floor(Math.random() * 200) + 300;
    this.dx = 2 + (Math.random() * 2);
    this.width = 120;
    this.height = 140;
    this.enemy = new Image();
    this.enemy.src = "assets/153262875432218109 (1).png";
  }


  hitbox() {
    return {
      x1: this.x,
      x2: this.x + 100,
      y1: this.y + 15,
      y2: this.y + 130,
    };
  }

  reset() {
    this.x = 1000 + (Math.random() * 500);
    this.y = Math.floor(Math.random() * 300) + 200;
  }

  draw() {
    if (this.x < -200) {
      this.x = 1100;
      this.y = Math.floor(Math.random() * 200) + 100;
    }
    this.x -= this.dx;
    if (this.c < 20) {
      this.context.drawImage(this.enemy,610,160,120,140,this.x,this.y,120,140);
      this.c += 1;
    } else if (this.c < 40) {
      this.context.drawImage(this.enemy,730,165,120,140,this.x,this.y,120,140);
      this.c += 1;
    } else {
      this.context.drawImage(this.enemy,610,160,120,140,this.x,this.y,120,140);
      this.c = 0;
    }
  }
}

export class EnemyObject2 extends GameObject {
  constructor(canvasWidth, canvasHeight, ctx) {
    super(canvasWidth, canvasHeight);
    this.context = ctx;
    this.y = Math.floor(Math.random() * 200) + 300;
    this.dy = Math.random() * 3 + 2 * [-1,1][Math.floor(Math.random() * 1)];
    this.width = 120;
    this.height = 140;
    this.enemy = new Image();
    this.enemy.src = "assets/imageedit_3_7734021827.png";
    this.draw = this.draw.bind(this);
  }

  hitbox() {
    return {
      x1: this.x + 10,
      x2: this.x + 30,
      y1: this.y + 10,
      y2: this.y + 30,
    };
  }

  reset() {
    this.x = 1000 + Math.floor(Math.random() * 500);
    this.y = Math.floor(Math.random() * 200) + 300;
  }

  draw() {
    if (this.x < -200) {
      this.x = 1000 + Math.floor(Math.random() * 500);
      this.y = Math.floor(Math.random() * 200) + 300;
    }
    if (this.y >= 550) {
      this.dy = this.dy * -1;
    } else if (this.y <= 0) {
      this.dy = this.dy * -1;
    }
    this.x -= 4;
    this.y -= this.dy;
    this.context.drawImage(this.enemy,200,5,62,60,this.x,this.y,60,60);
  }
}

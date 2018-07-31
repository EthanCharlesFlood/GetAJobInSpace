let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let now, delta;
let then = Date.now();
let fps = 60;
let interval = 1000/fps;
let gameStart = 0;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px Comic Sans MS, Comic Sans, cursive";

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;
let spacePressed = false;
let gameRunning = false;

const keyDownHandler = (e) => {
  if (e.keyCode === 40) {
    upPressed = true;
  } else if (e.keyCode === 38) {
    downPressed = true;
  } else if (e.keyCode === 32) {
    spacePressed = true;
    if (gameStart < 1) {
      gameStart = 1;
    } else if (gameStart > 0 && tc.dead) {
      gameStart = 0;
      tc.reset();
      e1.reset();
      o1.reset();
      o2.reset();
      o2.reset();
      o3.reset();
      o4.reset();
      jp.reset();
    }
  } else if (e.keyCode === 39) {
    rightPressed = true;
  } else if (e.keyCode === 37) {
    leftPressed = true;
  }
}

const keyUpHandler = (e) => {
  if (e.keyCode === 40) {
    upPressed = false;
  } else if (e.keyCode === 38) {
    downPressed = false;
  } else if (e.keyCode === 39) {
    rightPressed = false;
  } else if (e.keyCode === 37) {
    leftPressed = false;
  } else if (e.keyCode === 32) {
    spacePressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);




;




class GameObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.canvasHeight = 600;
    this.canvasWidth = 1000;
    this.context = ctx;
  }

  draw() {
  }
}

class BackgroundObject extends GameObject {
  constructor(canvasWidth,canvasHeight, context) {
    super(canvasWidth, canvasHeight, context);
    this.speed = 1;
    this.draw = this.draw.bind(this);
    this.background = new Image();
    this.background.src = "/home/ethan/Desktop/JavaScript-Project/assets/Starfield-4_1000x600.jpg";
  }

  draw() {
    this.x += this.speed;
    this.context.drawImage(this.background, this.x, this.y);
    this.context.drawImage(this.background, this.x - this.canvasWidth, this.y);

    if (this.x >= this.canvasWidth) {
      this.x = 0;
    }
  }
}

class CharacterObject extends GameObject {
  constructor(canvasWidth, canvasHeight, context) {
    super(canvasWidth, canvasHeight, context);
    this.draw = this.draw.bind(this);
    this.width = 35;
    this.height = 50;
    this.dead = false;
    this.count = 0;
    this.character = new Image();
    this.character.src = "/home/ethan/Desktop/JavaScript-Project/assets/3DS - Regular Show Mordecai and Rigby in 8-Bit Land - Garrett Bobby Ferguson Jr Suit.png";
    this.explosionImage = new Image();
    this.explosionImage.src = "/home/ethan/Desktop/JavaScript-Project/assets/exp2_0.png";
    this.checkCollision = this.checkCollision.bind(this);
    this.drawExplosion = this.drawExplosion.bind(this);
  }

  drawExplosion() {
    if (this.count < 30) {
      this.context.drawImage(this.explosionImage,0,0,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 60) {
      this.context.drawImage(this.explosionImage,0,65,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 90) {
      this.context.drawImage(this.explosionImage,0,130,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else if (this.count < 120) {
      this.context.drawImage(this.explosionImage,0,195,65,65,this.x,this.y,65,65);
      this.count += 1;
    } else {
      ctx.beginPath();
      ctx.fillText("YOU DID NOT GET A JOB IN SPACE", 250, 300);
      ctx.fillStyle = "#ff0000";
      ctx.closePath();
      ctx.beginPath();Math.floor(Math.random() * 500) + 100;
      ctx.fillText("Press Space to Reset", 375, 400);
      ctx.fillStyle = "#ff0000";
      ctx.closePath();
    }
  }

  checkCollision(object) {
    const playerHitbox = this.hitbox();
    const objectHitbox = object.hitbox();
    {
      if (
        playerHitbox.x1 < objectHitbox.x2 &&
        playerHitbox.x2 > objectHitbox.x1 &&
        playerHitbox.y1 < objectHitbox.y2 &&
        playerHitbox.y2 > objectHitbox.y1
      ) {
        this.dead = true;
        return true;
      }
    };
  }

  hitbox() {
    return {
      x1: this.x + 5,
      x2: this.x + 25,
      y1: this.y + 5,
      y2: this.y + 40
    };
  }

  reset() {
    this.x = 50;
    this.y = 50;
    this.dead = false;
    this.count = 0;
  }

  draw() {
    if (this.dead) {
      this.drawExplosion();
    } else {
      if (upPressed && this.y < 545) {
        this.y += 7;
      } else if (downPressed && this.y > 15) {
        this.y -= 7;
      } else if (rightPressed && this.x < 950) {
        this.x += 7;
      } else if (leftPressed && this.x > 10) {
        this.x -= 7;
      }
      if (!downPressed && !upPressed && !leftPressed && !rightPressed) {
        this.context.drawImage(this.character,100,420,55,90,this.x,this.y, 35, 50);
      } else if (downPressed) {
        this.context.drawImage(this.character,5,180,55,90,this.x,this.y, 35, 50);
      } else if (upPressed) {
        this.context.drawImage(this.character,5,250,55,90,this.x,this.y, 35, 50);
      } else if (rightPressed) {
        this.context.drawImage(this.character,120,80,55,90,this.x,this.y, 35, 50);
      } else if (leftPressed) {
        this.context.drawImage(this.character,5,420,55,90,this.x,this.y, 35, 50);
      }
    }
  }
}

class EnemyObject extends GameObject {
  constructor(canvasWidth, canvasHeight, context) {
    super(canvasWidth, canvasHeight, context);
    this.draw = this.draw.bind(this);
    this.y = Math.floor(Math.random() * 200) + 300;
    this.width = 120;
    this.height = 140;
    this.enemy = new Image();
    this.enemy.src = "/home/ethan/Desktop/JavaScript-Project/assets/153262875432218109 (1).png"
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
    this.x = 1100;
    this.y = Math.floor(Math.random() * 200) + 300;
  }

  draw() {
    if (this.x < -200) {
      this.x = 1100;
      this.y = Math.floor(Math.random() * 200) + 100;
    }
    this.x -= 2;
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

class Obstacle extends GameObject {
  constructor(canvasWidth, canvasHeight, context) {
    super(canvasWidth, canvasHeight, context);
    this.draw = this.draw.bind(this);
    this.obstacleWords = [
                        ["REJECTED", 55],
                        ["HIRING FREEZE", 160],
                        ["BAD CULTURAL FIT", 220],
                        ["UNDER-QUALIFIED", 220],
                        ["'DIFFERENT DIRECTION'", 341],
                        ["GET OUT OF MY OFFICE", 280],
                        ["THE POSITION HAS BEEN FILLED", 400],
                        ["PLEASE DON'T CONTACT US AGAIN", 444],
                        ["WHO REFERED YOU?", 280]];
    this.y = Math.floor( Math.random() * 600 );
    this.dy = Math.floor( Math.random() * 6);
    this.wordArr = this.obstacleWords[Math.floor(Math.random() * 8)];
    this.word = this.wordArr[0];
    this.dx = Math.floor( Math.random() * 8) + 1;
    this.vector = [1,-1][Math.floor(Math.random() * 2)]
  }

  hitbox() {
    return {
      x1: this.x,
      x2: this.x + this.wordArr[1],
      y1: this.y,
      y2: this.y + 15,
    };
  }

  reset() {
    this.x = 1000;
    this.y = Math.floor( Math.random() * 600 );
    this.wordArr = this.obstacleWords[Math.floor(Math.random() * 8)];
    this.vector = [1,-1][Math.floor(Math.random() * 2)];
    this.dy = Math.floor( Math.random() * 6) * this.vector;
    this.dx = Math.floor( Math.random() * 8) + 1;
  }

  draw() {
    if (this.x < -500) {
      this.x = 1000;
      this.y = Math.floor( Math.random() * 600 );
      this.wordArr = this.obstacleWords[Math.floor(Math.random() * 8)];
      this.vector = [1,-1][Math.floor(Math.random() * 2)];
      this.dy = Math.floor( Math.random() * 6) * this.vector;
      this.dx = Math.floor( Math.random() * 8) + 1;
    }
    this.x -= this.dx;
    if (this.y > 600) {
      this.dy = -1 * this.dy;
    } else if (this.y < 0) {
      this.dy = -1 * this.dy;
    }
    this.y = this.y + this.dy;
    ctx.beginPath();
    ctx.fillText(this.word, this.x, this.y)
    ctx.fillStyle = "#ff0000";
    ctx.closePath();
  }
}

class Menu {

  draw() {
    ctx.beginPath();
    ctx.fillText("Get a Job", 400, 200);
    ctx.fillStyle = "#ff0000";
    ctx.closePath();
    ctx.beginPath();
    ctx.fillText("IN SPACE", 395, 300);
    ctx.fillStyle = "#ff0000";
    ctx.closePath();
    ctx.beginPath();Math.floor(Math.random() * 500) + 100;
    ctx.fillText("Press Space to Start the Hunt", 300, 400);
    ctx.fillStyle = "#ff0000";
    ctx.closePath();
  }
}

class JobPoints {
  constructor(character) {
    this.jobPoints = 0;
    this.characer = character;
    this.draw = this.draw.bind(this);
    this.updateJobPoints = this.updateJobPoints.bind(this);
  }

  updateJobPoints() {
    const dead = this.characer.dead;
    if (!dead) {
      this.jobPoints = Math.floor(this.jobPoints + (Math.random() * 10));
    } else {
      const highJobPoints = $("li");
      console.log(highJobPoints);
    }
    this.jobPointDisplay = `Job Points: ${this.jobPoints}`;
  }

  reset() {
    this.jobPoints = 0;
  }

  draw() {
    ctx.beginPath();Math.floor(Math.random() * 500) + 100;
    ctx.fillText(this.jobPointDisplay, 25, 25);
    ctx.fillStyle = "#ff0000";
    ctx.closePath();
  }
}

const tc = new CharacterObject(50, 50);
const bg = new BackgroundObject(0,0);
const e1 = new EnemyObject(1500);
const o1 = new Obstacle(1000);
const o2 = new Obstacle(1000);
const o3 = new Obstacle(1000);
const jp = new JobPoints(tc);
const menu = new Menu;

const draw = () => {
  requestAnimationFrame(draw)

  now = Date.now();
  delta = now - then;

  if (delta > interval) {
    then = now - (delta % interval);
    if (gameStart < 1) {
      bg.draw();
      menu.draw();
    } else {
      bg.draw();
      tc.draw();
      e1.draw();
      o1.draw();
      o2.draw();
      o2.draw();
      o3.draw();
      jp.updateJobPoints();
      jp.draw();
      tc.checkCollision(e1);
      tc.checkCollision(o1);
      tc.checkCollision(o2);
      tc.checkCollision(o3);
      tc.checkCollision(o4);
    }
  }
}

draw();

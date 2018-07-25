const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px Comic Sans MS, Comic Sans, cursive"

let upPressed = false;
let downPressed = false;

const keyDownHandler = (e) => {
  if (e.keyCode === 40) {
    upPressed = true;
  } else if (e.keyCode === 38) {
    downPressed = true;
  }
}

const keyUpHandler = (e) => {
  if (e.keyCode === 40) {
    upPressed = false;
  } else if (e.keyCode === 38) {
    downPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


const background = new Image();
background.src = "/home/ethan/Desktop/JavaScript-Project/assets/Starfield-4_1000x600.jpg";

const testCharacter = new Image();
testCharacter.src = "/home/ethan/Desktop/JavaScript-Project/assets/pcsprite.png";

let x = 1000;
let y2 = Math.floor( Math.random() * 600 );
const testObstacle = () => {
  if (x < -150) {
    x = 1000;
    y2 = Math.floor( Math.random() * 600 );
  }
  x -= 5;
  ctx.beginPath();
  ctx.fillText("REJECTED",x, y2)
  ctx.fillStyle = "#ff0000";
  ctx.closePath();
}

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
  }

  draw() {
    this.x += this.speed;
    this.context.drawImage(background, this.x, this.y);
    this.context.drawImage(background, this.x - this.canvasWidth, this.y);

    if (this.x >= this.canvasWidth) {
      this.x = 0;
    }
  }
}

class CharacterObject extends GameObject {
  constructor(canvasWidth, canvasHeight, context) {
    super(canvasWidth, canvasHeight, context);
    this.draw = this.draw.bind(this);
  }

  draw() {
    if (upPressed && this.y < 545) {
      this.y += 5;
    } else if (downPressed && this.y > 15) {
      this.y -= 5;
    }
    if (!downPressed && !upPressed) {
      this.context.drawImage(testCharacter,0,0,55,90,this.x,this.y, 35, 50);
    } else if (downPressed) {
      this.context.drawImage(testCharacter,5,180,65,90,this.x,this.y, 35, 50);
    } else if (upPressed) {
      this.context.drawImage(testCharacter,0,270,70,90,this.x,this.y, 35, 50);
    }
  }
}

const tc = new CharacterObject(50, 50);
const bg = new BackgroundObject(0,0);
setInterval(bg.draw, 10);
setInterval(tc.draw, 10);
setInterval(testObstacle, 10);

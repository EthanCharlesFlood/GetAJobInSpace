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

class Menu {

  draw() {
    ctx.beginPath();
    ctx.fillText("Get a Job", 400, 200)
    ctx.fillStyle = "#ff0000";
    ctx.closePath();
    ctx.beginPath();
    ctx.fillText("IN SPACE", 395, 300)
    ctx.fillStyle = "#ff0000";
    ctx.closePath();
    ctx.beginPath();
    ctx.fillText("Press Space to Start the Hunt", 300, 400)
    ctx.fillStyle = "#ff0000";
    ctx.closePath();
  }
}

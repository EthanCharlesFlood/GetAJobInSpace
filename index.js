import CharacterObject from './scripts/character';
import Obstacle from "./scripts/obstacles.js";
import BackgroundObject from "./scripts/background.js";
import Menu from "./scripts/menu.js";
import JobPoints from "./scripts/jobPoints.js";
import HighScoreForm from "./scripts/highScoreForm.js";
import { EnemyObject, EnemyObject2 } from "./scripts/enemies.js";
import Collectable from "./scripts/collectables.js";
import Tutorial from "./scripts/tutorial.js";



let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let now, delta;
let then = Date.now();
let fps = 60;
let interval = 1000/fps;
let gameStart = 0;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "white";

let paused = false;
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;
let spacePressed = false;
let gameRunning = false;
let musicPlaying = true;

const shuffle = function (array) {
	let currentIndex = array.length;
  let temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

const heights = shuffle([50,150,250,350,450,550,640]);

const tc = new CharacterObject(150, 200, ctx);
const bg = new BackgroundObject(0,0, ctx);
const e1 = new EnemyObject(tc,1250, 0, ctx);
const o1 = new Obstacle(tc,1000, heights[0], ctx);
const o2 = new Obstacle(tc,1000, heights[1], ctx);
const o3 = new Obstacle(tc,1000, heights[2], ctx);
const o4 = new Obstacle(tc,1000, heights[3], ctx);
const o5 = new Obstacle(tc,1000, heights[4], ctx);
const o6 = new Obstacle(tc,1000, heights[5], ctx);
const o7 = new Obstacle(tc,1000, heights[6], ctx);
const jp = new JobPoints(tc, ctx);

const Obstacles = [o1,o2,o3,o4,o5,o6,o7];

const menu = new Menu(ctx);
// const hsf = new HighScoreForm(jp);
const clctb = new Collectable(tc,1000,300,ctx);
// const tutorial = new Tutorial(ctx,e1,clctb);

const resetGame = () => {
  gameStart = 0;
  jp.resetJobPoints();
  tc.reset();
  e1.reset();
  o1.reset();
  o2.reset();
  o3.reset();
  o4.reset();
  o5.reset();
  o6.reset();
  o7.reset();
  clctb.reset();
};


const keyDownHandler = (e) => {
  if (e.keyCode === 40) {
    tc.upPressed = true;
    // if (tutorial.done === false) {
    //   tutorial.upPressed = true;
    // }
  } else if (e.keyCode === 38) {
    tc.downPressed = true;
    // if (tutorial.done === false) {
    //   tutorial.downPressed = true;
    // }
  } else if (e.keyCode === 32) {
    spacePressed = true;
    if (gameStart < 1) {
      gameStart = 1;
    } else if (gameStart > 0 && tc.dead) {
        resetGame();
    }
  } else if (e.keyCode === 39) {
    tc.rightPressed = true;
    // if (tutorial.done === false) {
    //   tutorial.rightPressed = true;
    // }
  } else if (e.keyCode === 37) {
    tc.leftPressed = true;
    // if (tutorial.done === false) {
    //   tutorial.leftPressed = true;
    // }
  }
};

const keyUpHandler = (e) => {
  if (e.keyCode === 40) {
    tc.upPressed = false;
    // if (tutorial.done === false) {
    //   tutorial.upPressed = false;
    // }
  } else if (e.keyCode === 38) {
    tc.downPressed = false;
    // if (tutorial.done === false) {
    //   tutorial.downPressed = false;
    // }
  } else if (e.keyCode === 39) {
    tc.rightPressed = false;
    // if (tutorial.done === false) {
    //   tutorial.rightPressed = false;
    // }
  } else if (e.keyCode === 37) {
    tc.leftPressed = false;
    // if (tutorial.done === false) {
    //   tutorial.leftPressed = false;
    // }
  } else if (e.keyCode === 32) {
    spacePressed = false;
  }
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const draw = () => {
  requestAnimationFrame(draw);

  now = Date.now();
  delta = now - then;

  if (delta > interval) {
    then = now - (delta % interval);
    // bg.draw();
    // tutorial.draw();
    // tc.draw();
    if (gameStart < 1 && !(paused)) {
      bg.draw();
      menu.draw();
      tc.draw();
    } else if (!puased) {
      bg.draw();
      tc.draw();
      clctb.draw();
      tc.checkCollision(clctb);
      if (tc.collected < 3) {
        o1.draw();
        o2.draw();
        tc.checkCollision(o1);
        tc.checkCollision(o2);
      } else if (tc.collected < 6) {
        o1.draw();
        o2.draw();
        o3.draw();
        o4.draw();
        tc.checkCollision(o1);
        tc.checkCollision(o2);
        tc.checkCollision(o3);
        tc.checkCollision(o4);
      } else if (tc.collected < 9) {
        o1.draw();
        o2.draw();
        o3.draw();
        o4.draw();
        o5.draw();
        o6.draw();
        tc.checkCollision(o1);
        tc.checkCollision(o2);
        tc.checkCollision(o3);
        tc.checkCollision(o4);
        tc.checkCollision(o5);
        tc.checkCollision(o6);
      } else if (tc.collected < 12) {
        o1.draw();
        o2.draw();
        o3.draw();
        o4.draw();
        o5.draw();
        o6.draw();
        e1.draw();
        tc.checkCollision(o1);
        tc.checkCollision(o2);
        tc.checkCollision(o3);
        tc.checkCollision(o4);
        tc.checkCollision(o5);
        tc.checkCollision(o6);
        tc.checkCollision(e1);
      } else {
        o1.draw();
        o2.draw();
        o3.draw();
        o4.draw();
        o5.draw();
        o6.draw();
        e1.draw();
        tc.checkCollision(o1);
        tc.checkCollision(o2);
        tc.checkCollision(o3);
        tc.checkCollision(o4);
        tc.checkCollision(o5);
        tc.checkCollision(o6);
        tc.checkCollision(e1);
      }
      // jp.updateJobPoints();
      jp.draw();
    }
  }
};

draw();

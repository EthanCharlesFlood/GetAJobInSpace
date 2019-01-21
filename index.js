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
ctx.font = "30px Comic Sans MS, Comic Sans, cursive";


let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;
let spacePressed = false;
let gameRunning = false;

const tc = new CharacterObject(50, 50, ctx);
const bg = new BackgroundObject(0,0, ctx);
const e1 = new EnemyObject(1250, 0, ctx);
// const e2 = new EnemyObject(11250, 0, ctx);
// const e3 = new EnemyObject(21250, 0, ctx);
// const e4 = new EnemyObject2(1000, 0, ctx);
// const e5 = new EnemyObject2(6000, 0, ctx);
// const e6 = new EnemyObject2(11000, 0, ctx);
// const e7 = new EnemyObject2(16000, 0, ctx);
// const o1 = new Obstacle(1000, 0, ctx);
// const o2 = new Obstacle(11000, 0, ctx);
// const o3 = new Obstacle(21000, 0, ctx);
// const jp = new JobPoints(tc, ctx);
const menu = new Menu(ctx);
// const hsf = new HighScoreForm(jp);
const clctb = new Collectable(1000,300,ctx);

const resetGame = () => {
  gameStart = 0;
  jp.resetJobPoints();
  tc.reset();
  e1.reset();
  e2.reset();
  e3.reset();
  e4.reset();
  e5.reset();
  e6.reset();
  e7.reset();
  o1.reset();
  o2.reset();
  o3.reset();
};


const keyDownHandler = (e) => {
  if (e.keyCode === 40) {
    tc.upPressed = true;
  } else if (e.keyCode === 38) {
    tc.downPressed = true;
  } else if (e.keyCode === 32) {
    spacePressed = true;
    if (gameStart < 1) {
      gameStart = 1;
    } else if (gameStart > 0 && tc.dead) {
      if (jp.didGetAJob() !== null) {
        hsf.onHighScore();
      } else {
        resetGame();
      }
    }
  } else if (e.keyCode === 39) {
    tc.rightPressed = true;
  } else if (e.keyCode === 37) {
    tc.leftPressed = true;
  }
};

const keyUpHandler = (e) => {
  if (e.keyCode === 40) {
    tc.upPressed = false;
  } else if (e.keyCode === 38) {
    tc.downPressed = false;
  } else if (e.keyCode === 39) {
    tc.rightPressed = false;
  } else if (e.keyCode === 37) {
    tc.leftPressed = false;
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
    if (gameStart < 1) {
      bg.draw();
      menu.draw();
    } else {
      bg.draw();
      tc.draw();
      e1.draw();
      // e2.draw();
      // e3.draw();
      // e4.draw();
      // e5.draw();
      // e6.draw();
      // e7.draw();
      // o1.draw();
      // o2.draw();
      // o3.draw();
      clctb.draw();
      // jp.updateJobPoints();
      // jp.draw();
      tc.checkCollision(e1);
      // tc.checkCollision(e2);
      // tc.checkCollision(e3);
      // tc.checkCollision(e4);
      // tc.checkCollision(e5);
      // tc.checkCollision(e6);
      // tc.checkCollision(e7);
      // tc.checkCollision(o1);
      // tc.checkCollision(o2);
      // tc.checkCollision(o3);
      tc.checkCollision(clctb);
    }
  }
};

draw();

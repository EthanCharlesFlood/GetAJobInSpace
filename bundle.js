/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/character */ \"./scripts/character.js\");\n/* harmony import */ var _scripts_obstacles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/obstacles.js */ \"./scripts/obstacles.js\");\n/* harmony import */ var _scripts_background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/background.js */ \"./scripts/background.js\");\n/* harmony import */ var _scripts_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/menu.js */ \"./scripts/menu.js\");\n/* harmony import */ var _scripts_jobPoints_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/jobPoints.js */ \"./scripts/jobPoints.js\");\n/* harmony import */ var _scripts_enemies_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/enemies.js */ \"./scripts/enemies.js\");\n\n\n\n\n\n\n\nlet requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;\nlet now, delta;\nlet then = Date.now();\nlet fps = 60;\nlet interval = 1000/fps;\nlet gameStart = 0;\nconst canvas = document.getElementById(\"gameCanvas\");\nconst ctx = canvas.getContext(\"2d\");\nctx.font = \"30px Comic Sans MS, Comic Sans, cursive\";\n\nlet upPressed = false;\nlet downPressed = false;\nlet leftPressed = false;\nlet rightPressed = false;\nlet spacePressed = false;\nlet gameRunning = false;\n\nconst tc = new _scripts_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"](50, 50, ctx);\nconst bg = new _scripts_background_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0, ctx);\nconsole.log(ctx);\nconst e1 = new _scripts_enemies_js__WEBPACK_IMPORTED_MODULE_5__[\"EnemyObject\"](1250, 0, ctx);\nconst e2 = new _scripts_enemies_js__WEBPACK_IMPORTED_MODULE_5__[\"EnemyObject2\"](1000, 0, ctx);\nconst e3 = new _scripts_enemies_js__WEBPACK_IMPORTED_MODULE_5__[\"EnemyObject2\"](1250, 0, ctx);\nconst e4 = new _scripts_enemies_js__WEBPACK_IMPORTED_MODULE_5__[\"EnemyObject2\"](1500, 0, ctx);\nconst o1 = new _scripts_obstacles_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1000, 0, ctx);\nconst o2 = new _scripts_obstacles_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1000, 0, ctx);\nconst jp = new _scripts_jobPoints_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](tc, ctx);\nconst menu = new _scripts_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx);\n\nconst keyDownHandler = (e) => {\n  if (e.keyCode === 40) {\n    tc.upPressed = true;\n  } else if (e.keyCode === 38) {\n    tc.downPressed = true;\n  } else if (e.keyCode === 32) {\n    spacePressed = true;\n    if (gameStart < 1) {\n      gameStart = 1;\n    } else if (gameStart > 0 && tc.dead) {\n      gameStart = 0;\n      jp.resetJobPoints();\n      tc.reset();\n      e1.reset();\n      e2.reset();\n      e3.reset();\n      e4.reset();\n      o1.reset();\n      o2.reset();\n    }\n  } else if (e.keyCode === 39) {\n    tc.rightPressed = true;\n  } else if (e.keyCode === 37) {\n    tc.leftPressed = true;\n  }\n};\n\nconst keyUpHandler = (e) => {\n  if (e.keyCode === 40) {\n    tc.upPressed = false;\n  } else if (e.keyCode === 38) {\n    tc.downPressed = false;\n  } else if (e.keyCode === 39) {\n    tc.rightPressed = false;\n  } else if (e.keyCode === 37) {\n    tc.leftPressed = false;\n  } else if (e.keyCode === 32) {\n    spacePressed = false;\n  }\n};\n\ndocument.addEventListener(\"keydown\", keyDownHandler, false);\ndocument.addEventListener(\"keyup\", keyUpHandler, false);\n\n\nconst draw = () => {\n  requestAnimationFrame(draw);\n\n  now = Date.now();\n  delta = now - then;\n\n  if (delta > interval) {\n    then = now - (delta % interval);\n    if (gameStart < 1) {\n      bg.draw();\n      menu.draw();\n    } else {\n      bg.draw();\n      tc.draw();\n      e1.draw();\n      e2.draw();\n      e3.draw();\n      e4.draw();\n      o1.draw();\n      o2.draw();\n      jp.updateJobPoints();\n      jp.draw();\n      tc.checkCollision(e1);\n      tc.checkCollision(e2);\n      tc.checkCollision(e3);\n      tc.checkCollision(e4);\n      tc.checkCollision(o1);\n      tc.checkCollision(o2);\n    }\n  }\n};\n\ndraw();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./scripts/background.js":
/*!*******************************!*\
  !*** ./scripts/background.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.js */ \"./scripts/object.js\");\n\n\nclass BackgroundObject extends _object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(canvasWidth,canvasHeight, ctx) {\n    super(canvasWidth, canvasHeight);\n    this.context = ctx;\n    this.speed = 1;\n    this.draw = this.draw.bind(this);\n    this.background = new Image();\n    this.background.src = \"assets/Starfield-4_1000x600.jpg\";\n  }\n\n  draw() {\n    this.x += this.speed;\n    this.context.drawImage(this.background, this.x, this.y);\n    this.context.drawImage(this.background, this.x - this.canvasWidth, this.y);\n\n    if (this.x >= this.canvasWidth) {\n      this.x = 0;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackgroundObject);\n\n\n//# sourceURL=webpack:///./scripts/background.js?");

/***/ }),

/***/ "./scripts/character.js":
/*!******************************!*\
  !*** ./scripts/character.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.js */ \"./scripts/object.js\");\n\n\nclass CharacterObject extends _object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(canvasWidth, canvasHeight, ctx) {\n    super(canvasWidth, canvasHeight);\n    this.draw = this.draw.bind(this);\n    this.context = ctx;\n    this.width = 35;\n    this.height = 50;\n    this.dead = false;\n    this.count = 0;\n    this.upPressed = false;\n    this.downPressed = false;\n    this.leftPressed = false;\n    this.rightPressed = false;\n    this.spacePressed = false;\n    this.character = new Image();\n    this.character.src = \"assets/3DS - Regular Show Mordecai and Rigby in 8-Bit Land - Garrett Bobby Ferguson Jr Suit.png\";\n    this.explosionImage = new Image();\n    this.explosionImage.src = \"assets/exp2_0.png\";\n    this.checkCollision = this.checkCollision.bind(this);\n    this.drawExplosion = this.drawExplosion.bind(this);\n  }\n\n  drawExplosion() {\n    if (this.count < 30) {\n      this.context.drawImage(this.explosionImage,0,0,65,65,this.x,this.y,65,65);\n      this.count += 1;\n    } else if (this.count < 60) {\n      this.context.drawImage(this.explosionImage,0,65,65,65,this.x,this.y,65,65);\n      this.count += 1;\n    } else if (this.count < 90) {\n      this.context.drawImage(this.explosionImage,0,130,65,65,this.x,this.y,65,65);\n      this.count += 1;\n    } else if (this.count < 120) {\n      this.context.drawImage(this.explosionImage,0,195,65,65,this.x,this.y,65,65);\n      this.count += 1;\n    } else {\n      this.context.beginPath();\n      this.context.fillText(\"YOU DID NOT GET A JOB IN SPACE\", 250, 300);\n      this.context.fillStyle = \"#ff0000\";\n      this.context.closePath();\n      this.context.beginPath();\n      this.context.fillText(\"Press Space to Reset\", 375, 400);\n      this.context.fillStyle = \"#ff0000\";\n      this.context.closePath();\n    }\n  }\n\n  checkCollision(object) {\n    const playerHitbox = this.hitbox();\n    const objectHitbox = object.hitbox();\n    {\n      if (\n        playerHitbox.x1 < objectHitbox.x2 &&\n        playerHitbox.x2 > objectHitbox.x1 &&\n        playerHitbox.y1 < objectHitbox.y2 &&\n        playerHitbox.y2 > objectHitbox.y1\n      ) {\n        this.dead = true;\n        return true;\n      }\n    }\n  }\n\n  hitbox() {\n    return {\n      x1: this.x + 5,\n      x2: this.x + 25,\n      y1: this.y + 5,\n      y2: this.y + 40\n    };\n  }\n\n  reset() {\n    this.x = 50;\n    this.y = 50;\n    this.dead = false;\n    this.count = 0;\n  }\n\n  draw() {\n    if (this.dead) {\n      this.drawExplosion();\n    } else {\n      if (this.upPressed && this.y < 545) {\n        this.y += 7;\n      } else if (this.downPressed && this.y > 15) {\n        this.y -= 7;\n      } else if (this.rightPressed && this.x < 950) {\n        this.x += 7;\n      } else if (this.leftPressed && this.x > 10) {\n        this.x -= 7;\n      }\n      if (!this.downPressed && !this.upPressed && !this.leftPressed && !this.rightPressed) {\n        this.context.drawImage(this.character,100,420,55,90,this.x,this.y, 35, 50);\n      } else if (this.downPressed) {\n        this.context.drawImage(this.character,5,180,55,90,this.x,this.y, 35, 50);\n      } else if (this.upPressed) {\n        this.context.drawImage(this.character,5,250,55,90,this.x,this.y, 35, 50);\n      } else if (this.rightPressed) {\n        this.context.drawImage(this.character,120,80,55,90,this.x,this.y, 35, 50);\n      } else if (this.leftPressed) {\n        this.context.drawImage(this.character,5,420,55,90,this.x,this.y, 35, 50);\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CharacterObject);\n\n\n//# sourceURL=webpack:///./scripts/character.js?");

/***/ }),

/***/ "./scripts/enemies.js":
/*!****************************!*\
  !*** ./scripts/enemies.js ***!
  \****************************/
/*! exports provided: EnemyObject, EnemyObject2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EnemyObject\", function() { return EnemyObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EnemyObject2\", function() { return EnemyObject2; });\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.js */ \"./scripts/object.js\");\n\n\nclass EnemyObject extends _object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(canvasWidth, canvasHeight, ctx) {\n    super(canvasWidth, canvasHeight);\n    this.draw = this.draw.bind(this);\n    this.context = ctx;\n    this.y = Math.floor(Math.random() * 200) + 300;\n    this.width = 120;\n    this.height = 140;\n    this.enemy = new Image();\n    this.enemy.src = \"/assets/153262875432218109 (1).png\";\n    console.log(ctx);\n    console.log(this.context);\n  }\n\n  hitbox() {\n    return {\n      x1: this.x,\n      x2: this.x + 100,\n      y1: this.y + 15,\n      y2: this.y + 130,\n    };\n  }\n\n  reset() {\n    this.x = 1100;\n    this.y = Math.floor(Math.random() * 200) + 300;\n  }\n\n  draw() {\n    if (this.x < -200) {\n      this.x = 1100;\n      this.y = Math.floor(Math.random() * 200) + 100;\n    }\n    this.x -= 2;\n    if (this.c < 20) {\n      this.context.drawImage(this.enemy,610,160,120,140,this.x,this.y,120,140);\n      this.c += 1;\n    } else if (this.c < 40) {\n      this.context.drawImage(this.enemy,730,165,120,140,this.x,this.y,120,140);\n      this.c += 1;\n    } else {\n      this.context.drawImage(this.enemy,610,160,120,140,this.x,this.y,120,140);\n      this.c = 0;\n    }\n  }\n}\n\nclass EnemyObject2 extends _object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(canvasWidth, canvasHeight, ctx) {\n    super(canvasWidth, canvasHeight);\n    this.context = ctx;\n    this.y = Math.floor(Math.random() * 200) + 300;\n    this.dy = Math.random() * 3 + 1 * [-1,1][Math.floor(Math.random() * 1)];\n    this.width = 120;\n    this.height = 140;\n    this.enemy = new Image();\n    this.enemy.src = \"assets/imageedit_3_7734021827.png\";\n    this.draw = this.draw.bind(this);\n  }\n\n  hitbox() {\n    return {\n      x1: this.x + 10,\n      x2: this.x + 30,\n      y1: this.y + 10,\n      y2: this.y + 30,\n    };\n  }\n\n  reset() {\n    this.x = 1000 + Math.floor(Math.random() * 500);\n    this.y = Math.floor(Math.random() * 200) + 300;\n  }\n\n  draw() {\n    if (this.x < -200) {\n      this.x = 1000 + Math.floor(Math.random() * 500);\n      this.y = Math.floor(Math.random() * 200) + 300;\n    }\n    if (this.y >= 550) {\n      this.dy = this.dy * -1;\n    } else if (this.y <= 0) {\n      this.dy = this.dy * -1;\n    }\n    this.x -= 3;\n    this.y -= this.dy;\n    this.context.drawImage(this.enemy,200,5,62,60,this.x,this.y,60,60);\n  }\n}\n\n\n//# sourceURL=webpack:///./scripts/enemies.js?");

/***/ }),

/***/ "./scripts/jobPoints.js":
/*!******************************!*\
  !*** ./scripts/jobPoints.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass JobPoints {\n  constructor(character, context) {\n    this.jobPoints = 0;\n    this.characer = character;\n    this.context = context;\n    this.updateJobPoints = this.updateJobPoints.bind(this);\n    this.resetJobPoints = this.resetJobPoints.bind(this);\n    this.draw = this.draw.bind(this);\n  }\n\n  updateJobPoints() {\n    const dead = this.characer.dead;\n    if (!dead) {\n      this.jobPoints = Math.floor(this.jobPoints + (Math.random() * 10));\n    }\n    this.jobPointDisplay = `Job Points: ${this.jobPoints}`;\n  }\n\n  updateHighScores() {\n    let scores = document.getElementById(\"space-scores\");\n    if (this.jobPoints > scores[0].value) {\n\n    } else if (this.jobPoints > scores[1].value) {\n\n    } else if (this.jobPoints > scores[2].value) {\n\n    }\n  }\n\n  resetJobPoints() {\n    // this.updateHighScores();\n    this.jobPoints = 0;\n    this.JobPointDisplay = `Job Points: ${this.jobPoints}`;\n  }\n\n  draw() {\n    this.context.beginPath();\n    this.context.fillText(this.jobPointDisplay, 25, 25);\n    this.context.fillStyle = \"#ff0000\";\n    this.context.closePath();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobPoints);\n\n\n//# sourceURL=webpack:///./scripts/jobPoints.js?");

/***/ }),

/***/ "./scripts/menu.js":
/*!*************************!*\
  !*** ./scripts/menu.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Menu {\n  constructor(context) {\n    this.context = context;\n    this.draw = this.draw.bind(this);\n  }\n  draw() {\n    this.context.beginPath();\n    this.context.fillText(\"Get a Job\", 400, 200);\n    this.context.fillStyle = \"#ff0000\";\n    this.context.closePath();\n    this.context.beginPath();\n    this.context.fillText(\"IN SPACE\", 395, 300);\n    this.context.fillStyle = \"#ff0000\";\n    this.context.closePath();\n    this.context.beginPath();\n    this.context.fillText(\"Press Space to Start the Hunt\", 300, 400);\n    this.context.fillStyle = \"#ff0000\";\n    this.context.closePath();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n\n//# sourceURL=webpack:///./scripts/menu.js?");

/***/ }),

/***/ "./scripts/object.js":
/*!***************************!*\
  !*** ./scripts/object.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameObject {\n  constructor(x, y, ctx) {\n    this.x = x;\n    this.y = y;\n    this.speed = 0;\n    this.canvasHeight = 600;\n    this.canvasWidth = 1000;\n    this.context = ctx;\n  }\n\n  draw() {\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameObject);\n\n\n//# sourceURL=webpack:///./scripts/object.js?");

/***/ }),

/***/ "./scripts/obstacles.js":
/*!******************************!*\
  !*** ./scripts/obstacles.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.js */ \"./scripts/object.js\");\n\n\nclass Obstacle extends _object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(canvasWidth, canvasHeight, ctx) {\n    super(canvasWidth, canvasHeight);\n    this.context = ctx;\n    this.obstacleWords = [\n                        [\"REJECTED\", 50],\n                        [\"HIRING FREEZE\", 160],\n                        [\"BAD CULTURAL FIT\", 220],\n                        [\"UNDER-QUALIFIED\", 220],\n                        [\"'DIFFERENT DIRECTION'\", 341],\n                        [\"GET OUT OF MY OFFICE\", 280],\n                        [\"THE POSITION HAS BEEN FILLED\", 400],\n                        [\"PLEASE DON'T CONTACT US AGAIN\", 444],\n                        [\"WHO REFERED YOU?\", 280]];\n    this.y = Math.floor( Math.random() * 600 );\n    this.wordArr = this.obstacleWords[Math.floor(Math.random() * 8)];\n    this.word = this.wordArr[0];\n    this.dx = Math.floor( Math.random() * 5) + 4;\n    this.vector = [1,-1][Math.floor(Math.random() * 2)];\n    this.draw = this.draw.bind(this);\n  }\n\n  hitbox() {\n    return {\n      x1: this.x,\n      x2: this.x + this.wordArr[1],\n      y1: this.y,\n      y2: this.y + 15,\n    };\n  }\n\n  reset() {\n    this.x = 1000;\n    this.y = Math.floor( Math.random() * 600 );\n    this.wordArr = this.obstacleWords[Math.floor(Math.random() * 8)];\n    this.vector = [1,-1][Math.floor(Math.random() * 2)];\n    this.dx = Math.floor( Math.random() * 5) + 4;\n  }\n\n  draw() {\n    if (this.x < -500) {\n      this.x = 1000;\n      this.y = Math.floor( Math.random() * 600 );\n      this.wordArr = this.obstacleWords[Math.floor(Math.random() * 8)];\n      this.word = this.wordArr[0];\n      this.vector = [1,-1][Math.floor(Math.random() * 2)];\n      this.dx = Math.floor( Math.random() * 5) + 4;\n    }\n    this.x -= this.dx;\n    this.y = this.y;\n    this.context.beginPath();\n    this.context.fillText(this.word, this.x, this.y);\n    this.context.fillStyle = \"#ff0000\";\n    this.context.closePath();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacle);\n\n\n//# sourceURL=webpack:///./scripts/obstacles.js?");

/***/ })

/******/ });
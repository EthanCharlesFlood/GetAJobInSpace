export class KeyHandler {
  constructor(e, menu, tutorial, character) {
    this.upPressed = false;
    this.downPressed = false;
    this.leftPressed = false;
    this.rightPressed = false;
    this.spacePressed = false;
    this.e = e;
    this.menu = menu;
    this.tc = tc;
    this.tt = tt;
    this.gameStart = 0;
    this.objects = objects;
  }

  keyDownHandler() {
    if (this.e.keyCode === 40) {
      this.tc.upPressed = true;
  		if (this.tutorial) {
  			this.tt.upPressed = true;
  		}
    } else if (this.e.keyCode === 38) {
      this.tc.downPressed = true;
  		if (this.tutorial) {
  			this.tt.downPressed = true;
  		}
    } else if (this.e.keyCode === 32) {
      this.spacePressed = true;
      if (this.gameStart < 1 && menu.selector == 1) {
        this.gameStart = 1;
  			this.tc.startMusic();
      } else if (this.gameStart < 1 && menu.selector == 0) {
  			this.tutorial = true;
  		} else if (this.gameStart > 0 && this.tc.dead) {
          this.objects.forEach(o => o.reset());
      }
    } else if (this.e.keyCode === 39) {
      this.tc.rightPressed = true;
  		if (this.tutorial) {
  			this.tt.rightPressed = true;
  		}
    } else if (this.e.keyCode === 37) {
      this.tc.leftPressed = true;
  		if (this.tutorial) {
  			this.tt.leftPressed = true;
  		}
    }
  }

  keyUpHandler() {
    if (e.keyCode === 40) {
      this.tc.upPressed = false;
      if (this.tutorial) {
        this.tt.upPressed = false;
      }
      menu.up();
    } else if (e.keyCode === 38) {
      this.tc.downPressed = false;
      if (this.tutorial) {
        this.tt.downPressed = false;
      }
      this.menu.down();
    } else if (e.keyCode === 39) {
      this.tc.rightPressed = false;
      if (this.tutorial) {
        this.tt.rightPressed = false;
      }
    } else if (e.keyCode === 37) {
      this.tc.leftPressed = false;
      if (this.tutorial) {
        this.tt.leftPressed = false;
      }
    } else if (e.keyCode === 32) {
      this.spacePressed = false;
    }
  }
}

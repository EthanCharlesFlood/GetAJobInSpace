class PausedScreen {


  draw() {
    this.context.beginPath();
    this.context.fillText("PAUSED", 430, 250);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("Press Space to Resume", 465, 350);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
  }
}

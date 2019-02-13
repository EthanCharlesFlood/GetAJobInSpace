class PausedScreen {
  constructor(context) {
    this.context = context;
    this.draw = this.draw.bind(this);
  }

  draw() {
    this.context.beginPath();
    this.context.fillText("PAUSED", 430, 250);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
  }
}

export default PausedScreen;

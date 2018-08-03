class JobPoints {
  constructor(character, context) {
    this.jobPoints = 0;
    this.characer = character;
    this.context = context;
    this.updateJobPoints = this.updateJobPoints.bind(this);
    this.resetJobPoints = this.resetJobPoints.bind(this);
    this.draw = this.draw.bind(this);
  }

  updateJobPoints() {
    const dead = this.characer.dead;
    if (!dead) {
      this.jobPoints = Math.floor(this.jobPoints + (Math.random() * 10));
    }
    this.jobPointDisplay = `Job Points: ${this.jobPoints}`;
  }

  updateHighScores() {
    let scores = document.getElementById("space-scores");
    if (this.jobPoints > scores[0].value) {

    } else if (this.jobPoints > scores[1].value) {

    } else if (this.jobPoints > scores[2].value) {

    }
  }

  resetJobPoints() {
    // this.updateHighScores();
    this.jobPoints = 0;
    this.JobPointDisplay = `Job Points: ${this.jobPoints}`;
  }

  draw() {
    this.context.beginPath();
    this.context.fillText(this.jobPointDisplay, 25, 25);
    this.context.fillStyle = "#ff0000";
    this.context.closePath();
  }
}

export default JobPoints;

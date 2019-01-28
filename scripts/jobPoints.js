class JobPoints {
  constructor(character, context) {
    this.jobPoints = 0;
    this.collected = 0;
    this.character = character;
    this.context = context;
    this.scores = $("#space-scores > li");
    this.updateJobPoints = this.updateJobPoints.bind(this);
    this.resetJobPoints = this.resetJobPoints.bind(this);
    this.draw = this.draw.bind(this);
    this.didGetAJob = this.didGetAJob.bind(this);
  }

  didGetAJob() {
    let threshold = (Math.random() * 5) + 15;
    if (this.character.collected > 1) {
      return true;
    } else {
      return false;
    }
  }


  updateJobPoints() {
    const dead = this.character.dead;
    if (!dead) {
      this.jobPoints += 1;
    }
    this.jobPointDisplay = `Job Points: ${this.jobPoints}`;
  }

  resetJobPoints() {
    this.jobPoints = 0;
    this.JobPointDisplay = `Job Points: ${this.jobPoints}`;
  }

  draw() {
    const dead = this.character.dead;
    if (!dead) {
      this.context.beginPath();
      this.context.fillText(this.jobPointDisplay, 25, 25);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
    } else {
      this.didGetAJob();
      this.context.beginPath();
      this.context.fillText(this.jobPointDisplay, 25, 25);
      this.context.fillStyle = "#FFFFFF";
      this.context.closePath();
      if (this.didGetAJob() === false) {
        this.context.beginPath();
        this.context.fillText("YOU DID NOT GET A JOB IN SPACE", 250, 300);
        this.context.fillStyle = "#FFFFFF";
        this.context.closePath();
        this.context.beginPath();
        this.context.fillText("Press Space to Reset", 375, 400);
        this.context.fillStyle = "#FFFFFF";
        this.context.closePath();
      } else {
        this.context.beginPath();
        this.context.fillText("CONGRATULATIONS ON YOUR SPACE JOB", 200, 200);
        this.context.fillStyle = "#FFFFFF";
        this.context.closePath();
      }
    }
  }
}

export default JobPoints;

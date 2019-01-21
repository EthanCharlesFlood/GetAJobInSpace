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
    if (this.character.dead && this.jobPoints > 5000 && this.collected === 10) {
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
    this.jobPointDisplay = `Years Spent Searching for a Job: ${this.jobPoints}`;
  }

  resetJobPoints() {
    this.jobPoints = 0;
    this.JobPointDisplay = `Years Spent Searching for a Job: ${this.jobPoints}`;
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

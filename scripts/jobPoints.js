class JobPoints {
  constructor(character, context) {
    this.jobPoints = 0;
    this.character = character;
    this.context = context;
    this.scores = $("#space-scores > li");
    this.updateJobPoints = this.updateJobPoints.bind(this);
    this.resetJobPoints = this.resetJobPoints.bind(this);
    this.draw = this.draw.bind(this);
    this.didGetAJob = this.didGetAJob.bind(this);
  }

  didGetAJob() {
    if (this.jobPoints > this.scores[0].value) {
      return 0;
    } else if (this.jobPoints > this.scores[1].value) {
      return 1;
    } else if (this.jobPoints > this.scores[2].value) {
      return 2;
    } else {
      return null;
    }
  }


  updateJobPoints() {
    const dead = this.character.dead;
    if (!dead) {
      this.jobPoints = Math.floor(this.jobPoints + (Math.random() * 10));
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
      this.context.fillStyle = "#ff0000";
      this.context.closePath();
    } else {
      this.didGetAJob();
      this.context.beginPath();
      this.context.fillText(this.jobPointDisplay, 25, 25);
      this.context.fillStyle = "#ff0000";
      this.context.closePath();
      if (this.didGetAJob() === null) {
        this.context.beginPath();
        this.context.fillText("YOU DID NOT GET A JOB IN SPACE", 250, 300);
        this.context.fillStyle = "#ff0000";
        this.context.closePath();
        this.context.beginPath();
        this.context.fillText("Press Space to Reset", 375, 400);
        this.context.fillStyle = "#ff0000";
        this.context.closePath();
      } else {
        this.context.beginPath();
        this.context.fillText("CONGRATULATIONS ON YOUR SPACE JOB", 200, 200);
        this.context.fillStyle = "#ff0000";
        this.context.closePath();
        this.context.beginPath();
        this.context.fillText("Press Space to Receive your Paperwork", 245, 300);
        this.context.fillStyle = "#ff0000";
        this.context.closePath();
        this.context.beginPath();
        this.context.fillText("Then Sign and Submit it on the right", 260, 400);
        this.context.fillStyle = "#ff0000";
        this.context.closePath();
      }
    }
  }
}

export default JobPoints;

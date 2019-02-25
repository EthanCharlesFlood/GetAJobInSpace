
class HighScoreForm {
  constructor(database) {
    this.inputName = ["_","_","_","_","_","_","_","_","_","_"];
    this.database = database;
    this.scores = {
      highest: null,
      higher: null,
      high: null
    };
    this.fetchScores = this.fetchScores.bind(this);
    this.didGetAJob = this.didGetAJob.bind(this);
    this.giveName = this.giveName.bind(this);
    this.fetchScores();
  }

  giveName() {
    return this.inputName.join('');
  }

  addLetter(c) {
    if (this.inputName.length < 10) {
      this.inputName.shift(c);
    } else if (this.inputName.length > 10) {
      this.inputName.pop();
      this.inputName.shift(c);
    }
  }

  didGetAJob(score) {
    return score > Object.values(this.scores.highScores.high);
  }

  fetchScores() {
    this.database.ref('highScores/').once('value', scores => {
    	this.scores = scores.val();
    });
  }

  update(jobPoints) {
    if (jobPoints > Object.values(this.scores.highest)) {
      const name = this.inputName.join("");
      this.scores.highest = { name: jobPoints };
      this.scores.higher = this.scores.highest;
      this.scores.high = this.scores.higher;
    } else if (jobPoints > Object.values(this.scores.higher)) {
      this.scores.higher = { name: jobPoints };
      this.scores.high = this.scores.higher;
    } else if (jobPoints > Object.values(this.scores.high)) {
      this.scores.high = { name: jobPoints };
    }
    let ref = this.database.ref('highScores/');
    ref.set(this.scores);
  }

  draw() {
    const name1 = Object.keys(this.scores.highest)[0];
    const name2 = Object.keys(this.scores.higher)[0];
    const name3 = Object.keys(this.scores.high)[0];
    const score1 = Object.values(this.scores.highest);
    const score2 = Object.values(this.scores.higher);
    const score3 = Object.values(this.scores.high);
    this.context.beginPath();
    this.context.fillText("High Scores", 435, 150);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(name1, 430, 250);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(name2, 430, 350);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(name3, 430, 450);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(score1, 630, 250);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(score2, 630, 350);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(score3, 630, 450);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("PRESS SPACE TO RESET", 375, 400);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
  }

}

export default HighScoreForm;

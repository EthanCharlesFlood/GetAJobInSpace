
class HighScoreForm {
  constructor(context,database) {
    this.inputName = ["_","_","_","_","_","_","_","_","_","_"];
    this.database = database;
    this.context = context;
    this.scores = {
      highScores: {
        highest: null,
        higher: null,
        high: null
      }
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
    if (jobPoints > Object.values(this.scores.highScores.highest)) {
      const name = this.inputName.join("");
      this.scores.highScores.highest = { name: jobPoints };
      this.scores.highScores.higher = this.scores.highScores.highest;
      this.scores.highScores.high = this.scores.highScores.higher;
    } else if (jobPoints > Object.values(this.scores.highScores.higher)) {
      this.scores.highScores.higher = { name: jobPoints };
      this.scores.highScores.high = this.scores.highScores.higher;
    } else if (jobPoints > Object.values(this.scores.highScores.high)) {
      this.scores.highScores.high = { name: jobPoints };
    }
    let ref = this.database.ref('highScores/');
    ref.set(this.scores.highScores);
  }

  draw() {
    const name1 = Object.keys(this.scores.highScores.highest)[0];
    const name2 = Object.keys(this.scores.highScores.higher)[0];
    const name3 = Object.keys(this.scores.highScores.high)[0];
    const score1 = Object.values(this.scores.highScores.highest);
    const score2 = Object.values(this.scores.highScores.higher);
    const score3 = Object.values(this.scores.highScores.high);
    this.context.beginPath();
    this.context.fillText("High Scores", 435, 150);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(name1, 300, 250);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(name2, 300, 350);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(name3, 300, 450);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(score1, 650, 250);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(score2, 650, 350);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText(score3, 650, 450);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
    this.context.beginPath();
    this.context.fillText("PRESS SPACE TO RESET", 350, 550);
    this.context.fillStyle = "#FFFFFF";
    this.context.closePath();
  }

}

export default HighScoreForm;

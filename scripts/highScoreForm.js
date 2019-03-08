
class HighScoreForm {
  constructor(context,database) {
    this.inputName = [];
    this.database = database;
    this.context = context;
    this.scores = {
        highest: null,
        higher: null,
        high: null
    };
    this.fetchScores = this.fetchScores.bind(this);
    this.addLetter = this.addLetter.bind(this);
    this.didGetAJob = this.didGetAJob.bind(this);
    this.giveName = this.giveName.bind(this);
    this.reset = this.reset.bind(this);
    this.fetchScores();
  }

  giveName() {
    return this.inputName.join('') || ["_","_","_","_","_","_","_","_","_","_"].join("");
  }

  reset() {
    this.inputName = [];
  }

  addLetter(c) {
    if (c.length > 1) {
      return null;
    }
    if (this.inputName.length < 10) {
      this.inputName.push(c);
    } 
  }

  didGetAJob(score) {
    return score >= Object.values(this.scores.high);
  }

  fetchScores() {
    this.database.ref('highScores/').once('value', scores => {
    	this.scores = scores.val();
    });
  }

  backSpace() {
    if (this.inputName.length > 0) {
      this.inputName.pop();
    }
    return null;
  }

  update(jobPoints) {
    const name = this.inputName.join("");
    if (jobPoints > Object.values(this.scores.highest)) {
      this.scores.high = this.scores.higher;
      this.scores.higher = this.scores.highest;
      this.scores.highest = { [name]: jobPoints };
    } else if (jobPoints > Object.values(this.scores.higher) && jobPoints < Object.values(this.scores.highest)) {
      this.scores.high = this.scores.higher;
      this.scores.higher = { [name]: jobPoints };
    } else if (jobPoints > Object.values(this.scores.high) &&  jobPoints < Object.values(this.scores.higher)) {
      this.scores.high = { [name]: jobPoints };
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
    this.context.fillText("PEOPLE WITH JOBS IN SPACE", 315, 150);
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

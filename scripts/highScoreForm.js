
class HighScoreForm {
  constructor(context) {
    this.inputName = [];
    this.context = context;
    this.scores = {
        highest: null,
        higher: null,
        high: null
    };
    this.database = { highScores: this.scores }
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
    const highScore = (this.scores.high && Object.values(this.scores.high)[0]) || 0;
    console.log(score, highScore, score >= highScore)
    return score >= highScore;
  }

  fetchScores() {
    console.log('poop')
    console.log(this.database)
    return this.database.highScores
  }

  backSpace() {
    if (this.inputName.length > 0) {
      this.inputName.pop();
    }
    return null;
  }

  update(jobPoints) {
    const name = this.inputName.join("");
    const high = this.scores.high ? Object.values(this.scores.high)[0]: 0;
    const higher = this.scores.higher ? Object.values(this.scores.higher)[0]: 0;
    const highest = this.scores.highest ? Object.values(this.scores.highest)[0]: 0;
    console.log(high, higher, highest)
    if (jobPoints > highest) {
      this.scores.high = this.scores.higher;
      this.scores.higher = this.scores.highest;
      this.scores.highest = { [name]: jobPoints };
    } else if (jobPoints > higher) {
      this.scores.high = this.scores.higher;
      this.scores.higher = { [name]: jobPoints };
    } else if (jobPoints > highest) {
      this.scores.high = { [name]: jobPoints };
    }
    this.database.highScores = this.scores
  }

  draw() {
    const name1 = this.scores.highest && Object.keys(this.scores.highest)[0] || '';
    const name2 = this.scores.higher && Object.keys(this.scores.higher)[0] || '';
    const name3 = this.scores.high && Object.keys(this.scores.high)[0] || '';
    const score1 = this.scores.highest && Object.values(this.scores.highest)[0] || 0;
    const score2 = this.scores.higher && Object.values(this.scores.higher)[0] || 0;
    const score3 = this.scores.high && Object.values(this.scores.high)[0] || 0;
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

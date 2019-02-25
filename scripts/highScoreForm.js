
class HighScoreForm {
  constructor(database) {
    this.inputName = [];
    this.database = database;
    this.scores = null;
    this.fetchScores = this.fetchScores.bind(this);
    this.fetchScores();
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
    return score > Object.values(this.scores.high);
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


}

export default HighScoreForm;

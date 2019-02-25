
class HighScoreForm {
  constructor(jp) {
    this.jp = jp;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.alphabetSelector = 0;
  }

  up() {
    this.alphabetSelector += 1;
  }

  down() {
    this.alphabetSelector -= 1;
  }



}

export default HighScoreForm;

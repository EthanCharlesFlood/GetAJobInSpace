class HighScoreForm {
  constructor(jp) {
    this.jp = jp;
    this.onHighScore = this.onHighScore.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onHighScore(num) {
    console.log($("form"));
    $("form").removeAttr("hidden");
  }

  onSubmit() {
    let val = $("input").html();
    let id = this.jp.didGetAJob();
    $("#" + id).html(val);
    $("form").addAttr("hidden");
  }

}

export default HighScoreForm;

import Firebase from "firebase";
import "firebase/databse";
var app = firebase.initializeApp({});

class HighScoreForm {
  constructor(jp) {
    this.jp = jp;
    this.onHighScore = this.onHighScore.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onHighScore(num) {
    $("form").show();
  }

  onSubmit() {
    let val = $("input").val();
    let id = this.jp.didGetAJob();
    console.log(val);
    $("#" + id).text(val);
    $("form").hide();
  }

}

export default HighScoreForm;

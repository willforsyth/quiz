class question {
  constructor(question, choices, answer){
    this.quesiton = question;
    this.choices = choices;
    this.answer = answer;
  }
}

const allQuestions = [
  new question("Is kemper gay?", ["yes", "no"], "yes"),
  new question("Does he like boobies", ["no", "yes"], "no"),
  new question("Whats his favourite pokemon", ["pokkie bum time", "poke your mum"], "pokkie bum time"),
  new question("How small is his willie", ["1 inch", "1.25 inch"], "1 inch")
];

class quiz {
  constructor(questions){
    this.countIndex = 0;
    this.questions = questions;
    this.score = 0;
  }
}

quiz.prototype.test = function(){
    theQuiz.countIndex++;
}

let theQuiz = new quiz(allQuestions);
let testing = 'hello'

export {theQuiz, testing}

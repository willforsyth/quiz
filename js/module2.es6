import $ from 'jquery';
import {theQuiz, testing} from './module1';

let theQuestion = document.getElementById('question'),
    theAnswerOne = document.getElementById('choice0'),
    theAnswerTwo = document.getElementById('choice1'),
    theButtonOne = document.getElementById('guess0'),
    theButtonTwo = document.getElementById('guess1'),
    theQuizBody = document.getElementById('quiz'),
    progress = document.getElementById('progress'),
    total = document.getElementById('total')

let createTheQuestionUi = () => {
    theQuestion.innerHTML = theQuiz.questions[theQuiz.countIndex].quesiton;
    theAnswerOne.innerHTML = theQuiz.questions[theQuiz.countIndex].choices[0];
    theAnswerTwo.innerHTML = theQuiz.questions[theQuiz.countIndex].choices[1];
};

let answerTheQuiz = () => {
  $('button').on('click', function(e){
       // console.log(theQuiz.allQuestions.length);
       var valueClicked = $(this).prev().html();

         if(theQuiz.countIndex >= theQuiz.questions.length){
             $('#quiz').html( "<h1>Your scored " + " " + theQuiz.score + " out of " + theQuiz.questions.length + "</h1>" );
         }else {
           if(valueClicked === theQuiz.questions[theQuiz.countIndex].solution){
             theQuiz.countIndex++;
             theQuiz.score++;
             if(theQuiz.countIndex == theQuiz.questions.length){
               $('#quiz').html( "<h1>Your scored " + " " + theQuiz.score + " out of " + theQuiz.questions.length + "</h1>" );

             }else{
               createTheQuestionUi();
             }

           }else{
             theQuiz.countIndex++;
             if(theQuiz.countIndex == theQuiz.questions.length){
               $('#quiz').html( "<h1>Your scored " + " " + theQuiz.score + " out of " + theQuiz.questions.length + "</h1>" );

             }else{
               createTheQuestionUi();
             }
           }
         }
     });
};

export {createTheQuestionUi, answerTheQuiz}

import {Injectable} from "@angular/core";
import {User} from "../../models/user";
import {Lecture} from "../../models/lecture";
import {Question} from "../../models/question";
import {Answer} from "../../models/answer";

declare var firebase: any;

@Injectable()
export class QuestionFeedService {

  constructor() {}

  public createNewAnswer(questionId: string, answer: Answer){
    var key = firebase.database().ref('questions/' + questionId + "/answers").push().key;
    answer.id = key;
    firebase.database().ref('questions/' + questionId + "/answers/"+key).set(answer);
    firebase.database().ref('users/' + answer.user + "/answers/"+key).set(true);
  }

  public questionFromJSON(object: JSON){

    var question = new Question("","","","",[],[],"","","","","","",[]);
    if(object != null){
      question.id = object['id'];
      question.classid = object['classid'];
      question.question = object['question'];
      question.summary = object['summary'];
      question.choices = object['choices'];

      var answerArray = object['answers'];
      if(answerArray != null){
        console.log("answer array", answerArray);
        for(var answer in answerArray){
          console.log(answerArray[answer]);
          question.answers.push(this.answerFromJSON(answerArray[answer]));
        }
      }
      else{
        question.answers = [];
      }
      question.user = object['user'];
      question.date = object['date'];
      question.type = object['type'];
      question.anonymous = object['anonymous'];
      question.username = object['username'];
      question.picture = object['picture'];
      question.tags = object['tags'];
    }

    return question;
  }

  public answerFromJSON(object: JSON){
    var answer = new Answer("","","","","","","");
    if(object != null){
      answer.id = object['id'];
      answer.anonymous = object['anonymous'];
      answer.answer = object['answer'];
      answer.date = object['date'];
      answer.picture = object['picture'];
      answer.user = object['user'];
      answer.username = object['username'];
    }
    return answer;
  }

}

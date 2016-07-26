import {Injectable} from "@angular/core";
import {User} from "../../models/user";
import {Lecture} from "../../models/lecture";
import {Question} from "../../models/question";
import {Answer} from "../../models/answer";

declare var firebase: any;

@Injectable()
export class DashboardService {

  //ToDo: These keys need to be moved to server side
  constructor() {
  }

  /**
   * Create a new user
   * @param value
   */
  public createNewUser(user: User){
    firebase.database().ref('users/' + user.userid).set(user);
  }

  /**
   * Helper function to create a new user from a JSON object
   * (such as the snapshot.val() returned from firebase.
   * @param object
     */
  public userFromJSON(object: JSON){

    var user = new User('',[],[],[],[],'','');
      user.userid = object["userid"];
      if(object["classes"] != null){
        user.classes = object["classes"];
      }
      if(object["questions"] != null){
        user.questions = object["questions"];
      }
    if(object["notifications"] != null){
      user.notifications = object["notifications"];
    }
      user.auth = object["auth"];
      user.anonymous = object["anonymous"];

    return user;
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

import {Injectable} from "@angular/core";
import {User} from "../../models/user";
import {Lecture} from "../../models/lecture";
import {Question} from "../../models/question";

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

    var user = new User('',[],[],[],'','');
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

    var question = new Question("","","",[],[],"","","","","","",[]);
    question.classid = object['classid'];
    question.question = object['question'];
    question.summary = object['summary'];
    question.choices = object['choices'];
    if(object['answers'] != null){
      question.answers = object['answers'];
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

    return question;
  }

}

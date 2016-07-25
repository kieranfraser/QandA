import {Injectable} from "@angular/core";
import {User} from "../../models/user";
import {Lecture} from "../../models/lecture";
import {Question} from "../../models/question";

declare var firebase: any;

@Injectable()
export class QuestionInputService {

  //ToDo: These keys need to be moved to server side
  constructor() {
  }

  /**
   * Create a new question by a given user for a given class.
   * Must update the following:
   * 1. question node - holds all the question detail
   * 2. user node - holds the key as reference to the question
   * 3. class node - holds the key as reference to the question
   * @param value
   */
  public createNewQuestion(question: Question){
    var key = firebase.database().ref('questions').push().key;

    firebase.database().ref('questions/' + key).set(question);
    firebase.database().ref('users/' + question.user + '/questions/' + key).set(true);
    firebase.database().ref('classes/' + question.classid + '/questions/' + key).set(true);
  }
}

import {Injectable} from "@angular/core";
import {Lecture} from "../../models/lecture";
import {User} from "../../models/user";

declare var firebase: any;

@Injectable()
export class ClassListService {

  constructor() {}

  public lectureFromJSON(object: JSON){
    var lecture = new Lecture(
      object["name"],
      object["participant"],
      object["questions"],
      object["tags"]
    );
    return lecture;
  }

  /**
   * Update the current class list of a user.
   * @param user
   * @param classList
     */
  public updateUserClassList(user: User, classList: string[]){
    firebase.database().ref('users/' + user.userid + '/classes').set(classList);
  }
}

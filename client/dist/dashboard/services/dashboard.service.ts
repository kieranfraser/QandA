import {Injectable} from "@angular/core";
import {User} from "../../models/user";
import {Lecture} from "../../models/lecture";

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
    var user = new User(
      object["userid"],
      object["classes"],
      object["questions"],
      object["notifications"],
      object["auth"],
      object["anonymous"]
    );
    return user;
  }

  public lectureFromJSON(object: JSON){
    var lecture = new Lecture(
      object["name"],
      object["participant"],
      object["questions"],
      object["tags"]
    );
    return lecture;
  }


}

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

}

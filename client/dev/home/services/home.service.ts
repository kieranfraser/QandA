import {Injectable} from "@angular/core";

declare var firebase: any;

@Injectable()
export class HomeService {

  //ToDo: These keys need to be moved to server side
  constructor() {
    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      storageBucket: "",
    };
    //firebase.initializeApp(config);

  }

  /**
   * Create a new user (on first log-in with deezer account
   * @param value
   */
  public createNewUser(id, name){
    firebase.database().ref('users/' + id).set({
      username: name,
    });
  }

}

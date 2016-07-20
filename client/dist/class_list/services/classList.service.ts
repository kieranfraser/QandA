import {Injectable} from "@angular/core";
import {Lecture} from "../../models/lecture";

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
}

import {Component, forwardRef, Inject, Input} from '@angular/core';
import {Question} from "../../models/question";
import {DashboardComponent} from "../../dashboard/components/dashboard.component";
import {QuestionInputService} from "../services/question-input.service";

@Component({
  selector: 'question-input-cmp',
  templateUrl: 'question-input/templates/question_input.html',
  providers: [QuestionInputService]
})

/**
 * ToDo: this class needs tiding up: eg. type of questions should be persisted. User as Input().
 */
export class QuestionInputComponent {

  public types:string[] = ["Free-text", "Multi-choice"];
  public today:Date = new Date();
  @Input()  selectedClass: string;



  questionModel = new Question(this.selectedClass,
    "",
    "",
    [],
    [],
    JSON.parse(localStorage.getItem('profile')).user_id,
    this.today.toString(),
    this.types[0],
    "",
    JSON.parse(localStorage.getItem('profile')).name,
    JSON.parse(localStorage.getItem('profile')).picture,
    []);

  choiceOne: string = "";
  choiceTwo: string = "";
  choiceThree: string = "";
  choiceFour: string = "";

  questionTags: string[] = [];

  submitted = false;

  constructor(@Inject(forwardRef(() => DashboardComponent)) private _parent:DashboardComponent,
              private _questionInputService: QuestionInputService){}

  onSubmit(){
    this.submitted = true;

    this.today = new Date();
    this.questionModel.classid = this.selectedClass;
    this.questionModel.tags = this.questionTags;

    // logic for choices
    if(this.questionModel.type === 'Multi-choice'){
      this.questionModel.choices = [this.choiceOne, this.choiceTwo, this.choiceThree, this.choiceFour];
    }

    this._questionInputService.createNewQuestion(this.questionModel)

    this.questionModel = new Question(this.selectedClass,
      "",
      "",
      [],
      [],
      JSON.parse(localStorage.getItem('profile')).user_id,
      this.today.toString(),
      this.types[0],
      "",
      JSON.parse(localStorage.getItem('profile')).name,
      JSON.parse(localStorage.getItem('profile')).picture,
      []);

    //this.socket.emit('update', 'question');
    //this._parent.isCollapsedQuestion = !this._parent.isCollapsedQuestion;
    //this._parent.getQuestions();
  }

}

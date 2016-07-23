import {Component, forwardRef, Inject, Input} from '@angular/core';
import {Question} from "../../models/question";
import {DashboardComponent} from "../../dashboard/components/dashboard.component";

@Component({
  selector: 'question-input-cmp',
  templateUrl: 'question-input/templates/question_input.html'
})

export class QuestionInputComponent {

  public types:string[] = ["Free-text", "Multi-choice"];
  public today:Date = new Date();
  @Input()  selectedClass: string;

  socket = null;

  questionModel = new Question(this.selectedClass,
    "",
    "",
    [],
    [],
    "id",//JSON.parse(localStorage.getItem('profile')).user_id,
    this.today.toString(),
    this.types[0],
    "",
    "name",//JSON.parse(localStorage.getItem('profile')).name,
    "pic",//JSON.parse(localStorage.getItem('profile')).picture,
    []);

  choiceOne: string = "";
  choiceTwo: string = "";
  choiceThree: string = "";
  choiceFour: string = "";

  questionTags: string[] = [];

  constructor(@Inject(forwardRef(() => DashboardComponent)) private _parent:DashboardComponent){

    this.selectedClass = this._parent.selectedClass;
  }

  submitted = false;

  onSubmit(){
    this.submitted = true;

    this.today = new Date();
    console.log(this.questionModel);
    console.log(this.selectedClass);
    this.questionModel.classid = this.selectedClass;
    this.questionModel.tags = this.questionTags;

    // logic for choices
    if(this.questionModel.type === 'Multi-choice'){
      console.log("the choices are:");
      console.log(this.questionModel.choices);
      this.questionModel.choices = [this.choiceOne, this.choiceTwo, this.choiceThree, this.choiceFour];
    }

    var json = JSON.stringify(this.questionModel);
    console.log(json);
    //this.httpService.addQuestion(json).subscribe(
    //  data => console.log(JSON.stringify(data)),
    //  error => alert(error),
    //  () => console.log("post question success")
    //);
    console.log(JSON.stringify(this.questionModel));

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

    this.socket.emit('update', 'question');
    //this._parent.isCollapsedQuestion = !this._parent.isCollapsedQuestion;
    //this._parent.getQuestions();
  }

}

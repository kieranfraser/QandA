/**
 * Created by kfraser on 23/07/2016.
 */
import {Component, OnInit, forwardRef, Inject, Input} from '@angular/core';
import {Question} from "../../models/question";
import {DashboardComponent} from "../../dashboard/components/dashboard.component";

@Component({
  selector: 'question-feed-cmp',
  templateUrl: 'question-feed/templates/question_feed.html'
})

export class QuestionFeedComponent implements OnInit {

  // Input from the dashboard component, used to filter the comment feed
  @Input() classNValue: string;
  @Input()  questions: Question[];

  selectedQuestion: Question;

  socket = null;

  constructor( @Inject(forwardRef(() => DashboardComponent)) private _parent: DashboardComponent) {}

  ngOnInit() {
    console.log("Feed Loaded");
    this.selectedQuestion = new Question("","","",[],[],"","","","", "", "",[]);
    // get the list of questions for the given class
  }

  clickedQuestion(question: Question){
    this.selectedQuestion = question;
  }

  updateQuestions(){
    //this._parent.getQuestions();
  }

  getUserName(id: string){

  }

}

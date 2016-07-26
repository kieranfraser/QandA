/**
 * Created by kfraser on 23/07/2016.
 */
import {Component, OnInit, forwardRef, Inject, Input, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {Question} from "../../models/question";
import {DashboardComponent} from "../../dashboard/components/dashboard.component";
import {AnswerComponent} from "./answer.component";
import {AnswerInputComponent} from "./answer-input.component";
import {QuestionFeedService} from "../services/questionfeed.service";

declare var firebase: any;

@Component({
  selector: 'question-feed-cmp',
  templateUrl: 'question-feed/templates/question_feed.html',
  directives: [AnswerComponent, AnswerInputComponent],
  providers: [QuestionFeedService]
})

export class QuestionFeedComponent implements OnInit, OnDestroy {

  // Input from the dashboard component, used to filter the comment feed
  @Input() classValue: string;
  @Input() questions: Question[];

  selectedQuestion: Question;

  socket = null;

  constructor( @Inject(forwardRef(() => DashboardComponent)) private _parent: DashboardComponent,
  private _questionFeedService: QuestionFeedService, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    console.log("Feed Loaded");
    this.selectedQuestion = new Question("","","","",[],[],"","","","", "", "",[]);
    // get the list of questions for the given class

  }

  clickedQuestion(question: Question){
    this.selectedQuestion = question;
    firebase.database().ref('questions/'+ this.selectedQuestion.id).on('value', function(snapshot){
      console.log("question feed", "questions");
      console.log(snapshot.val());
      if(snapshot.val() != null){
        this.selectedQuestion = this._questionFeedService.questionFromJSON(snapshot.val());
      }
      this.ref.detectChanges();
    }.bind(this));
  }

  ngOnDestroy(){
    this.ref.detach();
  }
}

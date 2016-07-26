import {Component, forwardRef, Inject, OnInit, Input, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {Question} from "../../models/question";
import {QuestionFeedComponent} from "./question-feed.component";
import {QuestionFeedService} from "../services/questionfeed.service";
import {BUTTON_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap"
import {Answer} from "../../models/answer";
import {AnswerComponent} from "./answer.component";
import {NgModel, FORM_DIRECTIVES} from '@angular/forms';
import {CORE_DIRECTIVES} from '@angular/common';

declare var firebase: any;

@Component({
  selector: 'answer-input-cmp',
  templateUrl: 'question-feed/templates/answer_input.html',
  providers: [QuestionFeedService],
  directives: [BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class AnswerInputComponent implements OnDestroy{

  @Input() selectedQuestion: Question;
  answerModel = new Answer("",
    "",
    "",
    "",
    "",
    JSON.parse(localStorage.getItem('profile')).name,
    JSON.parse(localStorage.getItem('profile')).picture
  );
  public now:Date = new Date();
  submitted: boolean = false;

  constructor(@Inject(forwardRef(()=>AnswerComponent)) private _parent: AnswerComponent,
        private _questionFeedService: QuestionFeedService, private ref: ChangeDetectorRef){}

  onSubmit(){
    this.submitted = true;

    this.now = new Date();
    this.answerModel.user = JSON.parse(localStorage.getItem('profile')).user_id;
    this.answerModel.date = this.now.toString();


    this.selectedQuestion.answers.push(this.answerModel);

    if(this.answerModel.answer != ""){

      this._questionFeedService.createNewAnswer(this.selectedQuestion.id, this.answerModel);

      this.answerModel = new Answer("",
        "",
        "",
        "",
        "",
        JSON.parse(localStorage.getItem('profile')).name,
        JSON.parse(localStorage.getItem('profile')).picture
      );
      this.ref.detectChanges();
      this._parent.isCollapsedAnswer = true;

    }
  }

  ngOnDestroy(){
    this.ref.detach();
  }

}

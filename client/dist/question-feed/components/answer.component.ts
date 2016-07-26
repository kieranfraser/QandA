import {Component, forwardRef, Inject, OnInit, Input, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {Question} from "../../models/question";
import {QuestionFeedComponent} from "./question-feed.component";
import {QuestionFeedService} from "../services/questionfeed.service";
import {CollapseDirective} from "ng2-bootstrap/ng2-bootstrap"
import {AnswerInputComponent} from "./answer-input.component";
import {DonutComponent} from "../../graphs/components/donut.component";

declare var firebase: any;

@Component({
  selector: 'answer-cmp',
  templateUrl: 'question-feed/templates/answer.html',
  providers: [QuestionFeedService],
  directives: [CollapseDirective, AnswerInputComponent, DonutComponent]
})

export class AnswerComponent implements OnInit, OnDestroy {

  public isCollapsedAnswer:boolean = true;
  public isCollapsedStats:boolean = true;

  @Input() question;

  /**
   * 1. Get the question that was clicked.
   * 2. Create wells for each answer in the question.answer array.
   * 3. Create an input field for adding an answer.
   * 4. On submit, add the the answer to the question.answer array and update the question.
   */
  constructor(@Inject(forwardRef(() => QuestionFeedComponent))private _parent: QuestionFeedComponent,
  private _questionFeedService: QuestionFeedService, private ref: ChangeDetectorRef){}

  ngOnInit(){}

  ngOnDestroy(){
    this.ref.detach();
  }

}

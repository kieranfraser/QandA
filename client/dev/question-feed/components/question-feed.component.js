"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by kfraser on 23/07/2016.
 */
var core_1 = require('@angular/core');
var question_1 = require("../../models/question");
var dashboard_component_1 = require("../../dashboard/components/dashboard.component");
var answer_component_1 = require("./answer.component");
var answer_input_component_1 = require("./answer-input.component");
var questionfeed_service_1 = require("../services/questionfeed.service");
var donut_component_1 = require("../../graphs/components/donut.component");
var QuestionFeedComponent = (function () {
    function QuestionFeedComponent(_parent, _questionFeedService, ref) {
        this._parent = _parent;
        this._questionFeedService = _questionFeedService;
        this.ref = ref;
        this.socket = null;
    }
    QuestionFeedComponent.prototype.ngOnInit = function () {
        console.log("Feed Loaded");
        this.selectedQuestion = new question_1.Question("", "", "", "", [], [], "", "", "", "", "", "", []);
        // get the list of questions for the given class
    };
    QuestionFeedComponent.prototype.clickedQuestion = function (question) {
        this.selectedQuestion = question;
        firebase.database().ref('questions/' + this.selectedQuestion.id).on('value', function (snapshot) {
            console.log("question feed", "questions");
            console.log(snapshot.val());
            if (snapshot.val() != null) {
                this.selectedQuestion = this._questionFeedService.questionFromJSON(snapshot.val());
            }
            this.ref.detectChanges();
        }.bind(this));
    };
    QuestionFeedComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], QuestionFeedComponent.prototype, "classValue", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], QuestionFeedComponent.prototype, "questions", void 0);
    QuestionFeedComponent = __decorate([
        core_1.Component({
            selector: 'question-feed-cmp',
            templateUrl: 'question-feed/templates/question_feed.html',
            directives: [answer_component_1.AnswerComponent, answer_input_component_1.AnswerInputComponent, donut_component_1.DonutComponent],
            providers: [questionfeed_service_1.QuestionFeedService]
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return dashboard_component_1.DashboardComponent; }))), 
        __metadata('design:paramtypes', [dashboard_component_1.DashboardComponent, questionfeed_service_1.QuestionFeedService, core_1.ChangeDetectorRef])
    ], QuestionFeedComponent);
    return QuestionFeedComponent;
}());
exports.QuestionFeedComponent = QuestionFeedComponent;

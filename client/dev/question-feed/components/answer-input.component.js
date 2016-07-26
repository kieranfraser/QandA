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
var core_1 = require('@angular/core');
var question_1 = require("../../models/question");
var questionfeed_service_1 = require("../services/questionfeed.service");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var answer_1 = require("../../models/answer");
var answer_component_1 = require("./answer.component");
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var AnswerInputComponent = (function () {
    function AnswerInputComponent(_parent, _questionFeedService, ref) {
        this._parent = _parent;
        this._questionFeedService = _questionFeedService;
        this.ref = ref;
        this.answerModel = new answer_1.Answer("", "", "", "", "", JSON.parse(localStorage.getItem('profile')).name, JSON.parse(localStorage.getItem('profile')).picture);
        this.now = new Date();
        this.submitted = false;
    }
    AnswerInputComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.now = new Date();
        this.answerModel.user = JSON.parse(localStorage.getItem('profile')).user_id;
        this.answerModel.date = this.now.toString();
        this.selectedQuestion.answers.push(this.answerModel);
        if (this.answerModel.answer != "") {
            this._questionFeedService.createNewAnswer(this.selectedQuestion.id, this.answerModel);
            this.answerModel = new answer_1.Answer("", "", "", "", "", JSON.parse(localStorage.getItem('profile')).name, JSON.parse(localStorage.getItem('profile')).picture);
            this.ref.detectChanges();
            this._parent.isCollapsedAnswer = true;
        }
    };
    AnswerInputComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', question_1.Question)
    ], AnswerInputComponent.prototype, "selectedQuestion", void 0);
    AnswerInputComponent = __decorate([
        core_1.Component({
            selector: 'answer-input-cmp',
            templateUrl: 'question-feed/templates/answer_input.html',
            providers: [questionfeed_service_1.QuestionFeedService],
            directives: [ng2_bootstrap_1.BUTTON_DIRECTIVES, common_1.CORE_DIRECTIVES, forms_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return answer_component_1.AnswerComponent; }))), 
        __metadata('design:paramtypes', [answer_component_1.AnswerComponent, questionfeed_service_1.QuestionFeedService, core_1.ChangeDetectorRef])
    ], AnswerInputComponent);
    return AnswerInputComponent;
}());
exports.AnswerInputComponent = AnswerInputComponent;

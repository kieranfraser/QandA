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
var question_feed_component_1 = require("./question-feed.component");
var questionfeed_service_1 = require("../services/questionfeed.service");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var answer_input_component_1 = require("./answer-input.component");
var AnswerComponent = (function () {
    /**
     * 1. Get the question that was clicked.
     * 2. Create wells for each answer in the question.answer array.
     * 3. Create an input field for adding an answer.
     * 4. On submit, add the the answer to the question.answer array and update the question.
     */
    function AnswerComponent(_parent, _questionFeedService, ref) {
        this._parent = _parent;
        this._questionFeedService = _questionFeedService;
        this.ref = ref;
        this.isCollapsedAnswer = true;
        this.isCollapsedStats = true;
    }
    AnswerComponent.prototype.ngOnInit = function () { };
    AnswerComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AnswerComponent.prototype, "question", void 0);
    AnswerComponent = __decorate([
        core_1.Component({
            selector: 'answer-cmp',
            templateUrl: 'question-feed/templates/answer.html',
            providers: [questionfeed_service_1.QuestionFeedService],
            directives: [ng2_bootstrap_1.CollapseDirective, answer_input_component_1.AnswerInputComponent]
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return question_feed_component_1.QuestionFeedComponent; }))), 
        __metadata('design:paramtypes', [question_feed_component_1.QuestionFeedComponent, questionfeed_service_1.QuestionFeedService, core_1.ChangeDetectorRef])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;

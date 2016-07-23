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
var dashboard_component_1 = require("../../dashboard/components/dashboard.component");
var QuestionInputComponent = (function () {
    function QuestionInputComponent(_parent) {
        this._parent = _parent;
        this.types = ["Free-text", "Multi-choice"];
        this.today = new Date();
        this.socket = null;
        this.questionModel = new question_1.Question(this.selectedClass, "", "", [], [], "id", //JSON.parse(localStorage.getItem('profile')).user_id,
        this.today.toString(), this.types[0], "", "name", //JSON.parse(localStorage.getItem('profile')).name,
        "pic", //JSON.parse(localStorage.getItem('profile')).picture,
        []);
        this.choiceOne = "";
        this.choiceTwo = "";
        this.choiceThree = "";
        this.choiceFour = "";
        this.questionTags = [];
        this.submitted = false;
        this.selectedClass = this._parent.selectedClass;
    }
    QuestionInputComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.today = new Date();
        console.log(this.questionModel);
        console.log(this.selectedClass);
        this.questionModel.classid = this.selectedClass;
        this.questionModel.tags = this.questionTags;
        // logic for choices
        if (this.questionModel.type === 'Multi-choice') {
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
        this.questionModel = new question_1.Question(this.selectedClass, "", "", [], [], JSON.parse(localStorage.getItem('profile')).user_id, this.today.toString(), this.types[0], "", JSON.parse(localStorage.getItem('profile')).name, JSON.parse(localStorage.getItem('profile')).picture, []);
        this.socket.emit('update', 'question');
        //this._parent.isCollapsedQuestion = !this._parent.isCollapsedQuestion;
        //this._parent.getQuestions();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], QuestionInputComponent.prototype, "selectedClass", void 0);
    QuestionInputComponent = __decorate([
        core_1.Component({
            selector: 'question-input-cmp',
            templateUrl: 'question-input/templates/question_input.html'
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return dashboard_component_1.DashboardComponent; }))), 
        __metadata('design:paramtypes', [dashboard_component_1.DashboardComponent])
    ], QuestionInputComponent);
    return QuestionInputComponent;
}());
exports.QuestionInputComponent = QuestionInputComponent;

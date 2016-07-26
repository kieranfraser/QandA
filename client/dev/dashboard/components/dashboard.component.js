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
var common_1 = require('@angular/common');
var home_component_1 = require("../../home/components/home.component");
var dashboard_service_1 = require("../services/dashboard.service");
var user_1 = require("../../models/user");
var class_list_component_1 = require("../../class_list/components/class-list.component");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var lecturer_auth_component_1 = require("./lecturer-auth.component");
var question_feed_component_1 = require("../../question-feed/components/question-feed.component");
var question_input_component_1 = require("../../question-input/components/question-input.component");
var answer_component_1 = require("../../question-feed/components/answer.component");
var answer_input_component_1 = require("../../question-feed/components/answer-input.component");
var DashboardComponent = (function () {
    function DashboardComponent(_parent, ref, _dashboardService) {
        this._parent = _parent;
        this.ref = ref;
        this._dashboardService = _dashboardService;
        this.userLoggedIn = true;
        this.classes = [];
        this.user = new user_1.User('', [], [], [], [], '', '');
        this.questions = [];
        this.emptyFeed = false;
        this.selectedClass = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userLoggedIn = this._parent.userLoggedIn;
        this.initializeUser(JSON.parse(localStorage.getItem('profile')).user_id);
        // get user details from firebase
    };
    DashboardComponent.prototype.refresh = function () {
        this.ref.detectChanges();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    /**
     * Gets the user from our database
     * - if new user creates user
     * @param id
       */
    DashboardComponent.prototype.initializeUser = function (id) {
        firebase.database().ref('users/' + id).on('value', function (snapshot) {
            if (snapshot.val() != null) {
                this.user = this._dashboardService.userFromJSON(snapshot.val());
                this.classes = this.user.classes;
                this.ref.detectChanges();
            }
            else {
                var newUser = new user_1.User(id, [], [], [], [], '', '');
                this.user = newUser;
                this._dashboardService.createNewUser(newUser);
            }
        }.bind(this));
    };
    DashboardComponent.prototype.checkQuestionInArray = function (question) {
        return question.id == this;
    };
    DashboardComponent.prototype.classChange = function (value) {
        this.selectedClass = value;
        firebase.database().ref('classes/' + value + '/questions').on('value', function (snapshot) {
            console.log("Dash", "class");
            if (snapshot.val() != null) {
                this.questions = [];
                for (var key in snapshot.val()) {
                    firebase.database().ref('questions/' + key).on('value', function (snapshot) {
                        console.log("Dash", "question");
                        var question = this._dashboardService.questionFromJSON(snapshot.val());
                        var questionIndex = this.questions.findIndex(this.checkQuestionInArray, question.id);
                        if (questionIndex > -1) {
                            this.questions.splice(questionIndex, 1);
                        }
                        this.questions.push(question);
                        this.ref.detectChanges();
                    }.bind(this));
                }
            }
        }.bind(this));
    };
    DashboardComponent.prototype.updateQuestions = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard-cmp',
            templateUrl: 'dashboard/templates/dashboard.html',
            styleUrls: ['dashboard/styles/todo.scss'],
            providers: [dashboard_service_1.DashboardService],
            directives: [common_1.CORE_DIRECTIVES, class_list_component_1.ClassListComponent, lecturer_auth_component_1.LecturerAuthComponent, ng2_bootstrap_1.BUTTON_DIRECTIVES,
                question_feed_component_1.QuestionFeedComponent, answer_component_1.AnswerComponent, question_input_component_1.QuestionInputComponent, answer_input_component_1.AnswerInputComponent]
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return home_component_1.HomeComponent; }))), 
        __metadata('design:paramtypes', [home_component_1.HomeComponent, core_1.ChangeDetectorRef, dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

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
var core_1 = require("@angular/core");
var lecture_1 = require("../../models/lecture");
var ClassListService = (function () {
    function ClassListService() {
    }
    ClassListService.prototype.lectureFromJSON = function (object) {
        var lecture = new lecture_1.Lecture(object["name"], object["participant"], object["questions"], object["tags"]);
        return lecture;
    };
    /**
     * Update the current class list of a user.
     * @param user
     * @param classList
       */
    ClassListService.prototype.updateUserClassList = function (user, classList) {
        firebase.database().ref('users/' + user.userid + '/classes').set(classList);
    };
    ClassListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ClassListService);
    return ClassListService;
}());
exports.ClassListService = ClassListService;

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
 * Created by kfraser on 27/02/2016.
 */
var core_1 = require('@angular/core');
var lecture_1 = require("../../models/lecture");
var class_list_component_1 = require("../../class_list/components/class-list.component");
var tag_input_component_1 = require("../../form_utilities/components/tag-input.component");
var ClassInputComponent = (function () {
    /**
     * Inject the dashboard to change the toggle button for viewing the
     * class creation well (disappears on submission).
     * @param _parent - Dashboard component
     */
    function ClassInputComponent(_parent) {
        this._parent = _parent;
        this.className = "";
        this.tags = [];
    }
    ClassInputComponent.prototype.ngOnInit = function () { };
    /**
     * Used to create a new class - TODO: change from profile to user when user is completed
     * Creator of the class is added as a participant.
     * @param value - input class name
     */
    ClassInputComponent.prototype.addClass = function () {
        this.newClass = new lecture_1.Lecture(this.className, [], [], this.tags);
        var newClassKey = firebase.database().ref('classes').push().key;
        firebase.database().ref('classes/' + newClassKey).set(this.newClass);
        this.className = "";
        this.tags = [];
    };
    ClassInputComponent = __decorate([
        core_1.Component({
            selector: 'class-input',
            templateUrl: 'class_input/templates/class_input.html',
            directives: [tag_input_component_1.TagInputComponent]
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return class_list_component_1.ClassListComponent; }))), 
        __metadata('design:paramtypes', [class_list_component_1.ClassListComponent])
    ], ClassInputComponent);
    return ClassInputComponent;
}());
exports.ClassInputComponent = ClassInputComponent;

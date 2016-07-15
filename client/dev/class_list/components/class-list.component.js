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
 * Created by kfraser on 13/03/2016.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var class_input_component_1 = require("../../class_input/components/class-input.component");
var dashboard_component_1 = require("../../dashboard/components/dashboard.component");
var ClassListComponent = (function () {
    function ClassListComponent(_parent) {
        this._parent = _parent;
        this.singleModel = '1';
        this.radioModel = 'Middle';
        this.isCollapsedClass = true;
    }
    ClassListComponent.prototype.ngOnInit = function () {
        //this.auth = JSON.parse(localStorage.getItem('user')).auth;
        this.auth = 'lecturer';
    };
    ClassListComponent.prototype.save = function () {
        var joinedList = [];
        /*for(var lecture of this.classes){
            if(lecture['joined'] === true){
                joinedList.push(lecture['class'])
            }
        }
        this.user = new User(JSON.parse(localStorage.getItem('profile')).user_id,
        joinedList,
        [],
        [],
        "",
        "");

        var json = JSON.stringify(this.user);*/
        /*this.httpService.updateUserClasses(json).subscribe(
            data => console.log(JSON.stringify(data)),
            error => alert(error),
            () => console.log("User classes updated")
        );
        this._parent.getClassList();
        this._parent.selectedClass = '';*/
    };
    ClassListComponent.prototype.refresh = function () {
        /*this._parent.getClassList();*/
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ClassListComponent.prototype, "classes", void 0);
    ClassListComponent = __decorate([
        core_1.Component({
            selector: 'class-list',
            templateUrl: 'class_list/templates/class_list.html',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, class_input_component_1.ClassInputComponent]
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return dashboard_component_1.DashboardComponent; }))), 
        __metadata('design:paramtypes', [dashboard_component_1.DashboardComponent])
    ], ClassListComponent);
    return ClassListComponent;
}());
exports.ClassListComponent = ClassListComponent;

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
 * Created by kfraser on 15/03/2016.
 */
var core_1 = require('@angular/core');
var dashboard_component_1 = require("./dashboard.component");
var LecturerAuthComponent = (function () {
    function LecturerAuthComponent(_parent) {
        this._parent = _parent;
        this.unsent = true;
    }
    /**
     * ToDo: don't allow lecturers send again or don't let them open this modal.
     */
    LecturerAuthComponent.prototype.ngOnInit = function () {
        this.unsent = true;
    };
    /**
     * Todo: must add back in the functionality to send an email to the user.
     */
    LecturerAuthComponent.prototype.getAuthorised = function () {
        console.log("Authorise user");
        /*console.log(JSON.parse(localStorage.getItem('profile')));

        var json = JSON.stringify(JSON.parse(localStorage.getItem('profile')));
        this.httpService.sendAuthEmail(json).subscribe(
            data => console.log(JSON.stringify(data)),
            error => alert(error),
            () => console.log("Email Sent!")
        );*/
        this.unsent = false;
    };
    LecturerAuthComponent = __decorate([
        core_1.Component({
            selector: 'lecturer-auth-cmp',
            templateUrl: 'dashboard/templates/lecturer_auth_modal.html',
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return dashboard_component_1.DashboardComponent; }))), 
        __metadata('design:paramtypes', [dashboard_component_1.DashboardComponent])
    ], LecturerAuthComponent);
    return LecturerAuthComponent;
}());
exports.LecturerAuthComponent = LecturerAuthComponent;

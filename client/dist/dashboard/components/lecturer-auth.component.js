"use strict";var __decorate=this&&this.__decorate||function(t,e,o,r){var n,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var u=t.length-1;u>=0;u--)(n=t[u])&&(c=(a<3?n(c):a>3?n(e,o,c):n(e,o))||c);return a>3&&c&&Object.defineProperty(e,o,c),c},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},__param=this&&this.__param||function(t,e){return function(o,r){e(o,r,t)}},core_1=require("@angular/core"),dashboard_component_1=require("./dashboard.component"),LecturerAuthComponent=function(){function t(t){this._parent=t,this.unsent=!0}return t.prototype.ngOnInit=function(){this.unsent=!0},t.prototype.getAuthorised=function(){console.log("Authorise user"),this.unsent=!1},t=__decorate([core_1.Component({selector:"lecturer-auth-cmp",templateUrl:"dashboard/templates/lecturer_auth_modal.html"}),__param(0,core_1.Inject(core_1.forwardRef(function(){return dashboard_component_1.DashboardComponent}))),__metadata("design:paramtypes",[dashboard_component_1.DashboardComponent])],t)}();exports.LecturerAuthComponent=LecturerAuthComponent;
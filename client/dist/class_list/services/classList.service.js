"use strict";var __decorate=this&&this.__decorate||function(e,t,r,a){var c,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(o=(s<3?c(o):s>3?c(t,r,o):c(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),lecture_1=require("../../models/lecture"),ClassListService=function(){function e(){}return e.prototype.lectureFromJSON=function(e){var t=new lecture_1.Lecture(e.name,e.participant,e.questions,e.tags);return t},e.prototype.updateUserClassList=function(e,t){firebase.database().ref("users/"+e.userid+"/classes").set(t)},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],e)}();exports.ClassListService=ClassListService;
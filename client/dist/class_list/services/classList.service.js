"use strict";var __decorate=this&&this.__decorate||function(e,t,r,c){var a,o=arguments.length,n=o<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,r):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,c);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(n=(o<3?a(n):o>3?a(t,r,n):a(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),lecture_1=require("../../models/lecture"),ClassListService=function(){function e(){}return e.prototype.lectureFromJSON=function(e){var t=new lecture_1.Lecture(e.name,e.participant,e.questions,e.tags);return t},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],e)}();exports.ClassListService=ClassListService;
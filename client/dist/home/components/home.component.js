"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(i<3?n(a):i>3?n(t,o,a):n(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),router_1=require("@angular/router"),home_service_1=require("../services/home.service"),angular2_jwt_1=require("angular2-jwt"),HomeComponent=function(){function e(e,t,o,r){this._homeService=e,this.router=t,this.ref=o,this.zone=r,this.userLoggedIn=!1}return e.prototype.ngOnInit=function(){},e.prototype.ngAfterViewInit=function(){angular2_jwt_1.tokenNotExpired()&&(console.log("Logged In"),this.goToDashboard())},e.prototype.goToDashboard=function(){var e=this;this.userLoggedIn=!0,this.zone.run(function(){return e.router.navigate(["/dashboard"])})},e.prototype.logout=function(){var e=this;console.log("User has logged out. Redirect to landing page."),localStorage.removeItem("profile"),localStorage.removeItem("id_token"),this.userLoggedIn=!1,this.zone.run(function(){return e.router.navigate(["/home"])})},e.prototype.click=function(){var e=this;this.zone.run(function(){return e.router.navigate(["/dashboard"])})},e.prototype.ngOnDestroy=function(){this.ref.detach()},e=__decorate([core_1.Component({selector:"home-cmp",templateUrl:"home/templates/home.html",styleUrls:["home/styles/home.scss"],providers:[home_service_1.HomeService],directives:[router_1.ROUTER_DIRECTIVES]}),__metadata("design:paramtypes",[home_service_1.HomeService,router_1.Router,core_1.ChangeDetectorRef,core_1.NgZone])],e)}();exports.HomeComponent=HomeComponent;
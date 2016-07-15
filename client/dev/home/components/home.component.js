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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var home_service_1 = require("../services/home.service");
var angular2_jwt_1 = require('angular2-jwt');
var HomeComponent = (function () {
    function HomeComponent(_homeService, router, zone) {
        this._homeService = _homeService;
        this.router = router;
        this.zone = zone;
        this.userLoggedIn = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        /*/!*Menu-toggle*!/
         jQuery("#menu-toggle").click(function(e) {
         e.preventDefault();
         jQuery("#wrapper").toggleClass("active");
         alert(1);
         });*/
        var _this = this;
        if (angular2_jwt_1.tokenNotExpired()) {
            console.log("Logged In");
            setTimeout(function () { return _this.goToDashboard(); }, 0);
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.goToDashboard = function () {
        var _this = this;
        this.userLoggedIn = true;
        this.zone.run(function () { return _this.router.navigate(['/dashboard']); });
    };
    /**
     * Function fired when the logout button is pressed. Deletes the user's JWT
     * and profile from local storage, sets the logged in boolean as false so the
     * login button is redisplayed and redirects to the landing page of the site.
     */
    HomeComponent.prototype.logout = function () {
        var _this = this;
        console.log('User has logged out. Redirect to landing page.');
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.userLoggedIn = false;
        this.zone.run(function () { return _this.router.navigate(['/home']); });
    };
    HomeComponent.prototype.click = function () {
        var _this = this;
        this.zone.run(function () { return _this.router.navigate(['/dashboard']); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-cmp',
            templateUrl: 'home/templates/home.html',
            styleUrls: ['home/styles/home.scss'],
            providers: [home_service_1.HomeService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, router_1.Router, core_1.NgZone])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

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
var router_1 = require("@angular/router");
var angular2_jwt_1 = require('angular2-jwt');
var home_component_1 = require("./home.component");
var LandingComponent = (function () {
    function LandingComponent(router, ref, _parent) {
        this.router = router;
        this.ref = ref;
        this._parent = _parent;
        this.lock = new Auth0Lock('ZUCNGuYeq1sAevQJNPUjSPKodgP8yBEy', 'qandauth.eu.auth0.com');
    }
    /**
     * Set up the Lock interface
     */
    LandingComponent.prototype.ngOnInit = function () {
        this.lock.show({
            container: 'authLogin'
        }, function (err, profile, id_token) {
            if (err) {
                console.log("There was an error :/", err);
                return;
            }
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', JSON.stringify(id_token));
            this._parent.goToDashboard();
        }.bind(this));
    };
    LandingComponent.prototype.logout = function () {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
    };
    LandingComponent.prototype.loggedIn = function () {
        this._parent.goToDashboard();
        return angular2_jwt_1.tokenNotExpired();
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'landing-cmp',
            templateUrl: 'home/templates/landing.html',
            styleUrls: ['home/styles/landing.scss']
        }),
        __param(2, core_1.Inject(core_1.forwardRef(function () { return home_component_1.HomeComponent; }))), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ChangeDetectorRef, home_component_1.HomeComponent])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;

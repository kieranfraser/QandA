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
var dashboard_component_1 = require("../../dashboard/components/dashboard.component");
var about_component_1 = require("../../about/components/about.component");
var landing_component_1 = require("./landing_component");
var HomeComponent = (function () {
    function HomeComponent(_homeService, router, ref, zone) {
        this._homeService = _homeService;
        this.router = router;
        this.ref = ref;
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
    };
    HomeComponent.prototype.goToDashboard = function () {
        var _this = this;
        this.zone.run(function () { return _this.router.navigate(['/dashboard']); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-cmp',
            templateUrl: 'home/templates/home.html',
            styleUrls: ['home/styles/home.scss'],
            providers: [home_service_1.HomeService, dashboard_component_1.DashboardComponent, landing_component_1.LandingComponent],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/', component: landing_component_1.LandingComponent },
            { path: '/about', component: about_component_1.AboutComponent },
            { path: '/dashboard', component: dashboard_component_1.DashboardComponent }
        ]), 
        __metadata('design:paramtypes', [home_service_1.HomeService, router_1.Router, core_1.ChangeDetectorRef, core_1.NgZone])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

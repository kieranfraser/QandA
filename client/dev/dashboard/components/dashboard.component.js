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
var common_1 = require('@angular/common');
var home_component_1 = require("../../home/components/home.component");
var dashboard_service_1 = require("../services/dashboard.service");
var user_1 = require("../../models/user");
var DashboardComponent = (function () {
    function DashboardComponent(_parent, ref, _dashboardService) {
        this._parent = _parent;
        this.ref = ref;
        this._dashboardService = _dashboardService;
        this.userLoggedIn = true;
        var config = {
            apiKey: "AIzaSyB4wQm5C0KbQmCK3aDGPqjWMZxRoS_UD3U",
            authDomain: "qanda-1370.firebaseapp.com",
            databaseURL: "https://qanda-1370.firebaseio.com",
            storageBucket: "qanda-1370.appspot.com",
        };
        firebase.initializeApp(config);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userLoggedIn = this._parent.userLoggedIn;
        this.initializeUser('anyone');
        // get user details from firebase
        // if not null get user classes using list of ids
    };
    DashboardComponent.prototype.refresh = function () {
        this.ref.detectChanges();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    /**
     * Gets the user from our database
     * - if new user creates user
     * @param id
       */
    DashboardComponent.prototype.initializeUser = function (id) {
        firebase.database().ref('users/' + id).on('value', function (snapshot) {
            if (snapshot.val() != null) {
                this.user = this._dashboardService.userFromJSON(snapshot.val());
            }
            else {
                var newUser = new user_1.User(id, [''], [''], [''], '', '');
                this._dashboardService.createNewUser(newUser);
            }
        }.bind(this));
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard-cmp',
            templateUrl: 'dashboard/templates/dashboard.html',
            styleUrls: ['dashboard/styles/todo.scss'],
            providers: [dashboard_service_1.DashboardService],
            directives: [common_1.CORE_DIRECTIVES]
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return home_component_1.HomeComponent; }))), 
        __metadata('design:paramtypes', [home_component_1.HomeComponent, core_1.ChangeDetectorRef, dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

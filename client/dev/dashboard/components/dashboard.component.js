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
var DashboardComponent = (function () {
    //userLoggedIn = false;
    function DashboardComponent(_parent, ref) {
        this._parent = _parent;
        this.ref = ref;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log('init');
    };
    DashboardComponent.prototype.refresh = function () {
        this.ref.detectChanges();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard-cmp',
            templateUrl: 'dashboard/templates/dashboard.html',
            styleUrls: ['dashboard/styles/todo.scss'],
            directives: [common_1.CORE_DIRECTIVES]
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return home_component_1.HomeComponent; }))), 
        __metadata('design:paramtypes', [home_component_1.HomeComponent, core_1.ChangeDetectorRef])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

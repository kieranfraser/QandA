/**
 * Created by kfraser on 12/07/2016.
 */
"use strict";
var router_1 = require('@angular/router');
var landing_component_1 = require("./home/components/landing_component");
var about_component_1 = require("./about/components/about.component");
var dashboard_component_1 = require("./dashboard/components/dashboard.component");
exports.routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: landing_component_1.LandingComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(exports.routes)
];

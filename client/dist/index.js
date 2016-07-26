"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var index_routes_1 = require('./index.routes');
var home_component_1 = require("./home/components/home.component");
var forms_1 = require('@angular/forms');
platform_browser_dynamic_1.bootstrap(home_component_1.HomeComponent, [http_1.HTTP_PROVIDERS, index_routes_1.appRouterProviders, forms_1.disableDeprecatedForms(),
    forms_1.provideForms(), core_1.provide(Window, { useValue: window })]);

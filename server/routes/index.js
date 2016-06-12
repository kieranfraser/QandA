"use strict";
var index_1 = require('../commons/static/index');
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        var routerInit = router;
        routerInit
            .route('/')
            .get(index_1.StaticDispatcher.sendIndex);
        app.use('/', routerInit);
    };
    return Routes;
}());
exports.Routes = Routes;

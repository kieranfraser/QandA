"use strict";
/**
 * Created by kfraser on 12/03/2016.
 */
var OnlineUser = (function () {
    function OnlineUser(name, picture, userId) {
        this.name = name;
        this.picture = picture;
        this.userId = userId;
    }
    return OnlineUser;
}());
exports.OnlineUser = OnlineUser;

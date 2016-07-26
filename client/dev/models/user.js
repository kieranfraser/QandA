"use strict";
/**
 * Created by kfraser on 15/07/2016.
 */
var User = (function () {
    function User(userid, classes, questions, answers, notifications, auth, anonymous) {
        this.userid = userid;
        this.classes = classes;
        this.questions = questions;
        this.answers = answers;
        this.notifications = notifications;
        this.auth = auth;
        this.anonymous = anonymous;
    }
    User.prototype.print = function () {
        return this.userid + "\n" +
            this.classes + "\n" +
            this.questions + "\n" +
            this.notifications + "\n" +
            this.auth + "\n" +
            this.anonymous + "\n";
    };
    return User;
}());
exports.User = User;

/**
 * Created by kfraser on 01/03/2016.
 */
"use strict";
var Answer = (function () {
    function Answer(answer, user, date, anonymous, username, picture) {
        this.answer = answer;
        this.user = user;
        this.date = date;
        this.anonymous = anonymous;
        this.username = username;
        this.picture = picture;
    }
    return Answer;
}());
exports.Answer = Answer;

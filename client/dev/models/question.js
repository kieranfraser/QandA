"use strict";
/**
 * Created by kfraser on 26/02/2016.
 */
var Question = (function () {
    function Question(id, classid, question, summary, choices, answers, user, date, type, anonymous, username, picture, tags) {
        this.id = id;
        this.classid = classid;
        this.question = question;
        this.summary = summary;
        this.choices = choices;
        this.answers = answers;
        this.user = user;
        this.date = date;
        this.type = type;
        this.anonymous = anonymous;
        this.username = username;
        this.picture = picture;
        this.tags = tags;
    }
    return Question;
}());
exports.Question = Question;

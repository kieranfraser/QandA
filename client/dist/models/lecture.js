"use strict";
/**
 * Created by kfraser on 27/02/2016.
 */
var Lecture = (function () {
    function Lecture(name, participants, questions, tags) {
        this.name = name;
        this.participants = participants;
        this.questions = questions;
        this.tags = tags;
    }
    return Lecture;
}());
exports.Lecture = Lecture;

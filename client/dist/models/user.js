"use strict";var User=function(){function s(s,t,i,n,o,e){this.userid=s,this.classes=t,this.questions=i,this.notifications=n,this.auth=o,this.anonymous=e}return s.prototype.print=function(){return this.userid+"\n"+this.classes+"\n"+this.questions+"\n"+this.notifications+"\n"+this.auth+"\n"+this.anonymous+"\n"},s}();exports.User=User;
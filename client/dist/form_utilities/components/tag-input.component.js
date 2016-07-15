"use strict";var __decorate=this&&this.__decorate||function(t,e,o,a){var s,n=arguments.length,i=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,a);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(i=(n<3?s(i):n>3?s(e,o,i):s(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),ng2_bootstrap_1=require("ng2-bootstrap/ng2-bootstrap"),TagInputComponent=function(){function t(){this.selected="",this.asyncSelected="",this.typeaheadLoading=!1,this.typeaheadNoResults=!1,this.states=[],this.statesComplex=[]}return t.prototype.getContext=function(){return this},t.prototype.getAsyncData=function(t){if(this._prevContext===t)return this._cache;this._prevContext=t;var e=function(){var e=new Promise(function(e){setTimeout(function(){var o=new RegExp(t.asyncSelected,"ig");return e(t.states.filter(function(t){return o.test(t)}))},200)});return e};return this._cache=e,this._cache},t.prototype.changeTypeaheadLoading=function(t){this.typeaheadLoading=t},t.prototype.changeTypeaheadNoResults=function(t){this.typeaheadNoResults=t},t.prototype.typeaheadOnSelect=function(t){console.log("Selected value: "+t.item)},t.prototype.onKey=function(t){if("Comma"===t.code){var e=this.selected.substring(0,this.selected.length-1),o=this.tags.indexOf(e,0);o===-1&&(this.tags.push(e),this.addToTypeahead(e),this.selected="")}if("Enter"===t.code)return!1},t.prototype.addToTypeahead=function(t){var e=this.states.indexOf(t,0);if(e===-1){this.states.push(t),this.statesComplex=[];for(var o=1,a=0,s=this.states;a<s.length;a++){var n=s[a];this.statesComplex.push({id:o,name:n}),o++}}},t.prototype.removeTag=function(t){var e=this.tags.indexOf(t,0);e>-1&&this.tags.splice(e,1),e=this.states.indexOf(t,0),e>-1&&this.states.splice(e,1);var o=this.statesComplex.filter(function(e){return e.name==t})[0];this.statesComplex.splice(o.id-1,1)},__decorate([core_1.Input(),__metadata("design:type",Array)],t.prototype,"tags",void 0),t=__decorate([core_1.Component({selector:"tag-input",templateUrl:"form_utilities/templates/tag_input.html",directives:[common_1.FORM_DIRECTIVES,common_1.CORE_DIRECTIVES,ng2_bootstrap_1.TYPEAHEAD_DIRECTIVES,forms_1.REACTIVE_FORM_DIRECTIVES]}),__metadata("design:paramtypes",[])],t)}();exports.TagInputComponent=TagInputComponent;
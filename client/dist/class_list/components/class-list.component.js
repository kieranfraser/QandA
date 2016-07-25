"use strict";var __decorate=this&&this.__decorate||function(e,t,s,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(n=(a<3?r(n):a>3?r(t,s,n):r(t,s))||n);return a>3&&n&&Object.defineProperty(t,s,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(e,t){return function(s,o){t(s,o,e)}},core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),class_input_component_1=require("../../class_input/components/class-input.component"),user_1=require("../../models/user"),dashboard_component_1=require("../../dashboard/components/dashboard.component"),classList_service_1=require("../services/classList.service"),ng2_bootstrap_1=require("ng2-bootstrap/ng2-bootstrap"),ClassListComponent=function(){function e(e,t,s){this._parent=e,this._classListService=t,this.ref=s,this.isCollapsedClass=!0}return e.prototype.ngOnInit=function(){this.auth="lecturer",this.getClasses()},e.prototype.getClasses=function(){firebase.database().ref("classes").on("value",function(e){if(null!=e.val()){this.classList=[];var t=e.val();for(var s in t){var o=this._classListService.lectureFromJSON(t[s]),r=!1;this.user.classes.indexOf(o.name)!=-1&&(o.joined=!0),this.classList.push({name:o.name,joined:r,tags:o.tags})}console.log(this.classList)}else this.classList=[];this.ref.detectChanges()}.bind(this))},e.prototype.save=function(){for(var e=[],t=0,s=this.classList;t<s.length;t++){var o=s[t];o.joined===!0&&e.push(o.name)}this._classListService.updateUserClassList(this.user,e)},e.prototype.refresh=function(){},e.prototype.ngOnDestroy=function(){this.ref.detach()},__decorate([core_1.Input(),__metadata("design:type",user_1.User)],e.prototype,"user",void 0),e=__decorate([core_1.Component({selector:"class-list",templateUrl:"class_list/templates/class_list.html",providers:[classList_service_1.ClassListService],directives:[common_1.CORE_DIRECTIVES,forms_1.FORM_DIRECTIVES,class_input_component_1.ClassInputComponent,ng2_bootstrap_1.BUTTON_DIRECTIVES]}),__param(0,core_1.Inject(core_1.forwardRef(function(){return dashboard_component_1.DashboardComponent}))),__metadata("design:paramtypes",[dashboard_component_1.DashboardComponent,classList_service_1.ClassListService,core_1.ChangeDetectorRef])],e)}();exports.ClassListComponent=ClassListComponent;
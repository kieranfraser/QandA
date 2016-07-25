/**
 * Created by kfraser on 13/03/2016.
 */
import {Component, Inject, forwardRef, OnInit, Input, ChangeDetectorRef, OnDestroy} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {ClassInputComponent} from "../../class_input/components/class-input.component";
import {User} from "../../models/user";
import {DashboardComponent} from "../../dashboard/components/dashboard.component";
import {Lecture} from "../../models/lecture";
import {ClassListService} from "../services/classList.service";
import {BUTTON_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";

declare var firebase: any;

@Component({
    selector: 'class-list',
    templateUrl: 'class_list/templates/class_list.html',
    providers: [ClassListService],
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ClassInputComponent, BUTTON_DIRECTIVES ]
})

/**
 * This component is a modal that appears when the user clicks on the all
 * classes button on the dashboard.
 */
export class ClassListComponent implements OnInit, OnDestroy{

    public isCollapsedClass:boolean = true;

    @Input() user: User;
    classList: any[];

    auth: string;

    constructor(@Inject(forwardRef(() => DashboardComponent)) private _parent:DashboardComponent,
                private _classListService: ClassListService, private ref: ChangeDetectorRef) {}

    ngOnInit(){
        //this.auth = JSON.parse(localStorage.getItem('user')).auth;
      this.auth = 'lecturer';
      this.getClasses();
    }

    getClasses(){
      firebase.database().ref('classes').on('value', function(snapshot){
        if(snapshot.val() != null){
          this.classList = [];
          var jsonObj = snapshot.val();

          for(var key in jsonObj){
            var lecture = this._classListService.lectureFromJSON(jsonObj[key]);
            var joined: boolean = false;
            if(this.user.classes.indexOf(lecture.name) != -1){
              lecture.joined = true;
            }
            this.classList.push({
              'name': lecture.name,
              'joined': joined,
              'tags': lecture.tags
            });
          }
          console.log(this.classList);
        }
        else{
          this.classList = [];
        }
        this.ref.detectChanges();
      }.bind(this));
    }

    save() {
        var joinedList :string[] = [];
        for(var lecture of this.classList){
            if(lecture['joined'] === true){
                joinedList.push(lecture['name']);
            }
        }
        this._classListService.updateUserClassList(this.user, joinedList);
    }

    refresh(){
        /*this._parent.getClassList();*/
    }

    ngOnDestroy(){
      this.ref.detach();
    }

}

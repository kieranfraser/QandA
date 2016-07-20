/**
 * Created by kfraser on 13/03/2016.
 */
import {Component, Inject, forwardRef, OnInit, Input, ChangeDetectorRef, OnDestroy} from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {ClassInputComponent} from "../../class_input/components/class-input.component";
import {User} from "../../models/user";
import {DashboardComponent} from "../../dashboard/components/dashboard.component";
import {Lecture} from "../../models/lecture";
import {ClassListService} from "../services/classList.service";

declare var firebase: any;

@Component({
    selector: 'class-list',
    templateUrl: 'class_list/templates/class_list.html',
    providers: [ClassListService],
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ClassInputComponent ]
})

/**
 * This component is a modal that appears when the user clicks on the all
 * classes button on the dashboard.
 */
export class ClassListComponent implements OnInit, OnDestroy{

    private singleModel:string = '1';
    private radioModel:string = 'Middle';

    public isCollapsedClass:boolean = true;

    @Input() user: User;
    allClasses: Lecture[];

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
          this.allClasses = [];
          var jsonObj = snapshot.val();
          console.log(snapshot.val());
          for(var key in jsonObj){
            var lecture = this._classListService.lectureFromJSON(jsonObj[key]);
            this.allClasses.push(lecture);
          }
          this.ref.detectChanges();
        }
        else{
          this.allClasses = [];
        }
      }.bind(this));
    }

    save() {
        var joinedList :string[] = [];
        /*for(var lecture of this.classes){
            if(lecture['joined'] === true){
                joinedList.push(lecture['class'])
            }
        }
        this.user = new User(JSON.parse(localStorage.getItem('profile')).user_id,
        joinedList,
        [],
        [],
        "",
        "");

        var json = JSON.stringify(this.user);*/
        /*this.httpService.updateUserClasses(json).subscribe(
            data => console.log(JSON.stringify(data)),
            error => alert(error),
            () => console.log("User classes updated")
        );
        this._parent.getClassList();
        this._parent.selectedClass = '';*/
    }

    refresh(){
        /*this._parent.getClassList();*/
    }

    ngOnDestroy(){
      this.ref.detach();
    }

}

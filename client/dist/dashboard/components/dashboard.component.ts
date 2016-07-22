import {Component, OnInit, OnDestroy, Inject, forwardRef, Input, ChangeDetectorRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'
import {HomeComponent} from "../../home/components/home.component";
import {DashboardService} from "../services/dashboard.service";
import {User} from "../../models/user";
import {Lecture} from "../../models/lecture";
import {ClassListComponent} from "../../class_list/components/class-list.component";
import {ClassInputComponent} from "../../class_input/components/class-input.component";
import {AboutComponent} from "../../about/components/about.component";
import {BUTTON_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {NgModel} from "@angular/forms";
import {LecturerAuthComponent} from "./lecturer-auth.component";

declare var firebase: any;

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard/templates/dashboard.html',
  styleUrls: ['dashboard/styles/todo.scss'],
  providers: [DashboardService],
  directives: [CORE_DIRECTIVES, ClassListComponent, LecturerAuthComponent, BUTTON_DIRECTIVES]
})

export class DashboardComponent implements OnInit {

  userLoggedIn = true;

  user: User;
  classes: String[];

  selectedClass: String;

  constructor(@Inject(forwardRef(() => HomeComponent)) private _parent:HomeComponent,
              private ref: ChangeDetectorRef, private _dashboardService: DashboardService) {

    this.classes = [];
    this.user = new User('',[],[],[],'','');
  }

  ngOnInit(){

    this.userLoggedIn = this._parent.userLoggedIn;

    this.initializeUser('anyone');
    // get user details from firebase


  }

  refresh(){
    this.ref.detectChanges();
  }

  ngOnDestroy(){
    this.ref.detach();
  }

  /**
   * Gets the user from our database
   * - if new user creates user
   * @param id
     */
  initializeUser(id){
    firebase.database().ref('users/'+id).on('value', function(snapshot){
      if(snapshot.val() != null){
        this.user = this._dashboardService.userFromJSON(snapshot.val());
        console.log("changed");
        console.log(this.user.classes);
        this.ref.detectChanges();
      }
      else{
        var newUser: User = new User(id,[],[],[],'','');
        this._dashboardService.createNewUser(newUser);
      }
    }.bind(this));
  }

  classChange(value:string){
    this.selectedClass = value;
  }
}

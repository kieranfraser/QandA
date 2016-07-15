import {Component, OnInit, OnDestroy, Inject, forwardRef, Input, ChangeDetectorRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'
import {HomeComponent} from "../../home/components/home.component";
import {DashboardService} from "../services/dashboard.service";
import {User} from "../../models/user";
import {Lecture} from "../../models/lecture";
import {ClassListComponent} from "../../class_list/components/class-list.component";
import {ClassInputComponent} from "../../class_input/components/class-input.component";
import {AboutComponent} from "../../about/components/about.component";


declare var DZ: any;
declare var firebase: any;

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard/templates/dashboard.html',
  styleUrls: ['dashboard/styles/todo.scss'],
  providers: [DashboardService],
  directives: [CORE_DIRECTIVES, ClassListComponent]
})

export class DashboardComponent implements OnInit {

  userLoggedIn = true;

  user: User;
  classes: Lecture[];

  constructor(@Inject(forwardRef(() => HomeComponent)) private _parent:HomeComponent,
              private ref: ChangeDetectorRef, private _dashboardService: DashboardService) {

    this.classes = [];
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
        this.user = this._dashboardService.userFromJSON(snapshot.val()) ;
      }
      else{
        var newUser: User = new User(id,[''],[''],[''],'','');
        this._dashboardService.createNewUser(newUser);
      }
    }.bind(this));
  }

  /**
   * Gets the classes current user is currently subscribed to.
   * @param user
     */
  getClasses(user: User){
    firebase.database().ref('classes/'+user.userid).on('value', function(snapshot){
      if(snapshot.val() != null){
        this.classes = [];
      }
      else{
        console.log(snapshot.val());
      }
    }.bind(this));
  }
}

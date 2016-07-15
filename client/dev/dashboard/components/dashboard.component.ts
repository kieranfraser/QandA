import {Component, OnInit, OnDestroy, Inject, forwardRef, Input, ChangeDetectorRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'
import {HomeComponent} from "../../home/components/home.component";
import {DashboardService} from "../services/dashboard.service";
import {User} from "../../models/user";

declare var DZ: any;
declare var firebase: any;

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard/templates/dashboard.html',
  styleUrls: ['dashboard/styles/todo.scss'],
  providers: [DashboardService],
  directives: [CORE_DIRECTIVES]
})

export class DashboardComponent implements OnInit {

  userLoggedIn = true;
  user: User;

  constructor(@Inject(forwardRef(() => HomeComponent)) private _parent:HomeComponent,
              private ref: ChangeDetectorRef, private _dashboardService: DashboardService) {
    var config = {
      apiKey: "AIzaSyB4wQm5C0KbQmCK3aDGPqjWMZxRoS_UD3U",
      authDomain: "qanda-1370.firebaseapp.com",
      databaseURL: "https://qanda-1370.firebaseio.com",
      storageBucket: "qanda-1370.appspot.com",
    };
    firebase.initializeApp(config);
  }

  ngOnInit(){

    this.userLoggedIn = this._parent.userLoggedIn;

    this.initializeUser('anyone');
    // get user details from firebase

    // if not null get user classes using list of ids
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

        // update classes

      }
      else{
        var newUser: User = new User(id,[''],[''],[''],'','');
        this._dashboardService.createNewUser(newUser);
      }
    }.bind(this));
  }
}

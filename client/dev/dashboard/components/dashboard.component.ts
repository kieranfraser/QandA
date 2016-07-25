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
import {Question} from "../../models/question";
import {QuestionFeedComponent} from "../../question-feed/components/question-feed.component";
import {QuestionInputComponent} from "../../question-input/components/question-input.component";

declare var firebase: any;

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard/templates/dashboard.html',
  styleUrls: ['dashboard/styles/todo.scss'],
  providers: [DashboardService],
  directives: [CORE_DIRECTIVES, ClassListComponent, LecturerAuthComponent, BUTTON_DIRECTIVES,
                QuestionFeedComponent, QuestionInputComponent]
})

export class DashboardComponent implements OnInit {

  userLoggedIn = true;

  user: User;
  classes: String[];

  // inputs for question-feed
  selectedClass: string;
  questions: Question[];

  // if no questions returned for selected class
  emptyFeed: boolean;

  constructor(@Inject(forwardRef(() => HomeComponent)) private _parent:HomeComponent,
              private ref: ChangeDetectorRef, private _dashboardService: DashboardService) {

    this.classes = [];
    this.user = new User('',[],[],[],'','');
    this.questions = [];
    this.emptyFeed = false;
    this.selectedClass = '';
  }

  ngOnInit(){

    this.userLoggedIn = this._parent.userLoggedIn;

    this.initializeUser(JSON.parse(localStorage.getItem('profile')).user_id);
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
    firebase.database().ref('classes/'+value+ '/questions').on('value', function(snapshot){
      if(snapshot.val() != null){
        this.questions = [];
        console.log("class questions: ",snapshot.val());
        for(var key in snapshot.val()){
          firebase.database().ref('questions/' + key).once('value').then(function(snapshot) {
            var question: Question = this._dashboardService.questionFromJSON(snapshot.val());
            this.questions.push(question);
            console.log(question);
            this.ref.detectChanges();
          }.bind(this));
        }
      }
    }.bind(this));
  }
}

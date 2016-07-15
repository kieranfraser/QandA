import {Component, OnInit, AfterViewInit, DoCheck, NgZone} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {HomeService} from "../services/home.service";
import {DashboardComponent} from "../../dashboard/components/dashboard.component";
import {AboutComponent} from "../../about/components/about.component";
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import {LandingComponent} from "./landing_component";

declare var Auth0Lock;
declare var firebase: any;

@Component({
  selector: 'home-cmp',
  templateUrl: 'home/templates/home.html',
  styleUrls: ['home/styles/home.scss'],
  providers: [HomeService],
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit, AfterViewInit {

  userLoggedIn = false;

  constructor(private _homeService: HomeService, private router: Router,
              private zone:NgZone) {}


  ngOnInit() {

    var config = {
      apiKey: "AIzaSyB4wQm5C0KbQmCK3aDGPqjWMZxRoS_UD3U",
      authDomain: "qanda-1370.firebaseapp.com",
      databaseURL: "https://qanda-1370.firebaseio.com",
      storageBucket: "qanda-1370.appspot.com",
    };
    firebase.initializeApp(config);
    /*/!*Menu-toggle*!/
     jQuery("#menu-toggle").click(function(e) {
     e.preventDefault();
     jQuery("#wrapper").toggleClass("active");
     alert(1);
     });*/

    if(tokenNotExpired()){
      console.log("Logged In");
      setTimeout(() => this.goToDashboard(), 0);
    }
  }

  ngAfterViewInit(){
  }

  goToDashboard(){
    this.userLoggedIn = true;
    this.zone.run(() => this.router.navigate(['/dashboard']));
  }

  /**
   * Function fired when the logout button is pressed. Deletes the user's JWT
   * and profile from local storage, sets the logged in boolean as false so the
   * login button is redisplayed and redirects to the landing page of the site.
   */
  logout() {
    console.log('User has logged out. Redirect to landing page.');
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.userLoggedIn = false;
    this.zone.run(() => this.router.navigate(['/home']));
  }

  click(){
    this.zone.run(() => this.router.navigate(['/dashboard']));
  }

}

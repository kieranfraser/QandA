import {Component, OnInit, ChangeDetectorRef, NgZone} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {HomeService} from "../services/home.service";
import {DashboardComponent} from "../../dashboard/components/dashboard.component";
import {AboutComponent} from "../../about/components/about.component";
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import {LandingComponent} from "./landing_component";

declare var Auth0Lock;

@Component({
  selector: 'home-cmp',
  templateUrl: 'home/templates/home.html',
  styleUrls: ['home/styles/home.scss'],
  providers: [HomeService, DashboardComponent, LandingComponent],
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  {path: '/', component: LandingComponent},
  {path: '/about', component: AboutComponent},
  {path: '/dashboard', component: DashboardComponent}
])

export class HomeComponent implements OnInit {

  userLoggedIn = false;

  constructor(private _homeService: HomeService, private router: Router, private ref: ChangeDetectorRef,
              private zone:NgZone) {}


  ngOnInit() {

    /*/!*Menu-toggle*!/
     jQuery("#menu-toggle").click(function(e) {
     e.preventDefault();
     jQuery("#wrapper").toggleClass("active");
     alert(1);
     });*/
  }

  goToDashboard(){
    this.zone.run(() => this.router.navigate(['/dashboard']));
  }

}

import {Component, OnInit, OnDestroy, ChangeDetectorRef, Inject, forwardRef, Input} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {HomeService} from "../services/home.service";
import {DashboardComponent} from "../../dashboard/components/dashboard.component";
import {AboutComponent} from "../../about/components/about.component";
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import {HomeComponent} from "./home.component";

declare var Auth0Lock;

@Component({
  selector: 'landing-cmp',
  templateUrl: 'home/templates/landing.html',
  styleUrls: ['home/styles/landing.scss']
})

export class LandingComponent implements OnInit, OnDestroy {

  lock = new Auth0Lock('ZUCNGuYeq1sAevQJNPUjSPKodgP8yBEy', 'qandauth.eu.auth0.com');


  constructor(private router: Router, private ref: ChangeDetectorRef,
                @Inject(forwardRef(() => HomeComponent)) private _parent:HomeComponent) {}


  /**
   * Set up the Lock interface
   */
  ngOnInit() {
    this.lock.show({
      container: 'authLogin'
    }, function(err, profile, id_token) {
      if (err) {
        console.log("There was an error :/", err);
        return;
      }
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', JSON.stringify(id_token));
      this._parent.goToDashboard();
    }.bind(this));
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    this._parent.goToDashboard();
    return tokenNotExpired();
  }

  ngOnDestroy(){
    this.ref.detach();
  }

}

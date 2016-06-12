import {Component, OnInit} from '@angular/core';
import {LandingComponent} from "./landing.component";
import {Router, Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {HomeService} from "../services/home.service";
import {DashboardComponent} from "../../dashboard/components/dashboard.component";
import {AboutComponent} from "../../about/components/about.component";

declare var firebase: any;

@Component({
  selector: 'home-cmp',
  templateUrl: 'home/templates/todo.html',
  styleUrls: ['home/styles/todo.css'],
  providers: [HomeService, DashboardComponent],
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  {path: '/', component: LandingComponent},
  {path: '/about', component: AboutComponent},
  {path: '/dashboard', component: DashboardComponent}
])

export class HomeComponent implements OnInit {

  title: string = "";

   constructor(private _homeService: HomeService, private router: Router) {}


  ngOnInit() {}

  login(){
    this.router.navigate(['/dashboard']);
  }

}

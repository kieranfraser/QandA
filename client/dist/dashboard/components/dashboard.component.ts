import {Component, OnInit, Inject, forwardRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'
import {HomeComponent} from "../../home/components/home.component";

declare var DZ: any;
declare var firebase: any;

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard/templates/dashboard.html',
  styleUrls: ['dashboard/styles/main.css'],
  directives: [CORE_DIRECTIVES]
})

export class DashboardComponent implements OnInit {


  constructor(@Inject(forwardRef(() => HomeComponent)) private _parent:HomeComponent) {}

  ngOnInit(){}
}

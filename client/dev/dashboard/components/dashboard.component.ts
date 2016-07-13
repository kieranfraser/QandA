import {Component, OnInit, OnDestroy, Inject, forwardRef, Input, ChangeDetectorRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'
import {HomeComponent} from "../../home/components/home.component";

declare var DZ: any;
declare var firebase: any;

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard/templates/dashboard.html',
  styleUrls: ['dashboard/styles/todo.scss'],
  directives: [CORE_DIRECTIVES]
})

export class DashboardComponent implements OnInit {

  //userLoggedIn = false;

  constructor(@Inject(forwardRef(() => HomeComponent)) private _parent:HomeComponent,
              private ref: ChangeDetectorRef) {}

  ngOnInit(){
    console.log('init');
  }

  refresh(){
    this.ref.detectChanges();
  }

  ngOnDestroy(){
    this.ref.detach();
  }
}

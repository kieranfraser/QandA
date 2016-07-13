/**
 * Created by kfraser on 12/07/2016.
 */

import { provideRouter, RouterConfig } from '@angular/router';
import {LandingComponent} from "./home/components/landing_component";
import {AboutComponent} from "./about/components/about.component";
import {DashboardComponent} from "./dashboard/components/dashboard.component";


export const routes: RouterConfig = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'dashboard', component: DashboardComponent}
];

export const appRouterProviders = [
  provideRouter(routes)
];

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';
import { appRouterProviders } from './index.routes';
import {HomeComponent} from "./home/components/home.component";
import {disableDeprecatedForms, provideForms} from '@angular/forms';


bootstrap(HomeComponent, [HTTP_PROVIDERS, appRouterProviders, disableDeprecatedForms(),
  provideForms(), provide(Window, {useValue: window})]);

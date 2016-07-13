import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';
import { appRouterProviders } from './index.routes';
import {HomeComponent} from "./home/components/home.component";


bootstrap(HomeComponent, [HTTP_PROVIDERS, appRouterProviders, provide(Window, {useValue: window})]);

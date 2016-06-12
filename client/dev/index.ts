import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import {HomeComponent} from "./home/components/home.component";


bootstrap(HomeComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(Window, {useValue: window})]);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core';

import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";

import {AppRoutes} from "./app.routes";

import {HomeComponent} from './pages/home/home.component';
import {LugaresComponent} from './pages/lugares/lugares.component';

@NgModule({
   imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_L90JHo4OpTz5P4h3lm48_HYZrwe69GQ'
    }),

  ],
  declarations: [    
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    HomeComponent,
    LugaresComponent   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

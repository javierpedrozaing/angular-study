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
import {DetalleComponent} from './pages/lugares/detalle.component';
import {ContactoComponent} from './pages/contacto/contacto.component';
import {LugaresService} from './services/lugares.service';



// config firebase service
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
// config firebase service

@NgModule({
   imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
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
    LugaresComponent,
    DetalleComponent,
    ContactoComponent,    
  ],
 
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }

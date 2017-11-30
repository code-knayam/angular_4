import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from "app/app-routing.module";
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SharedModule } from "app/shared/shared.module";
import { ShoppingListModule } from "app/shopping-list/shopping-list.module";
import { AuthModule } from "app/auth/auth.module";
import { CoreModule } from "app/core/core.module";
import { reducers } from './store/app.reducers';
import { AuthEffects } from 'app/auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,              
    ErrorPageComponent,     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,       
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }

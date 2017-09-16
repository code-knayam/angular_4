import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "app/app-routing.module";
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SharedModule } from "app/shared/shared.module";
import { ShoppingListModule } from "app/shopping-list/shopping-list.module";
import { AuthModule } from "app/auth/auth.module";
import { CoreModule } from "app/core/core.module";

@NgModule({
  declarations: [
    AppComponent,              
    ErrorPageComponent,     
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,       
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }

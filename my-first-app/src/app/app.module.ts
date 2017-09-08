  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';

  import { AppComponent } from './app.component';
  import { ServerComponent } from './server/server.component';
  import { ServersComponent } from './servers/servers.component';
  import { WarningAlertComponent } from './warningAlert/warningAlert.component';
  import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';


  @NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Task2Component,
    Task3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }

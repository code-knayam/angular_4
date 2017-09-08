import { Component, OnInit } from '@angular/core';
import { UserService } from "app/userService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  

  activeUsers : string[] = [];
  inactiveUsers : string[] = [];
  constructor( private userService : UserService ) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

}

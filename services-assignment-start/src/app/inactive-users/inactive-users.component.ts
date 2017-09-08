import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserService } from "app/userService.service";
import { CounterService } from "app/counterService.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];  

  constructor( private userService : UserService, private counterService : CounterService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {    
    this.userService.setActive(id);    
    console.log("Active to inactive =  " + ++this.counterService.inactiveToActive );
  }
}

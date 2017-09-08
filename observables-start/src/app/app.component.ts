import { Component, OnInit } from '@angular/core';
import { UserService } from "app/userService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user1Active = false;
  user2Active = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.userActivated.subscribe(
      (id : number) => {
        console.log(id);
        if ( id === 1) {
          this.user1Active = true;
        } else {
          this.user2Active = true;
        }
      }
    );
  }
  

}

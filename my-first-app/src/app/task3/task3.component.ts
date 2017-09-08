import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {


  logs = [];
  showText = true;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.logs.push( this.logs.length + 1 );
    this.showText = !this.showText;
  }

  getColor() {
    return this.logs.length > 4 ? 'blue' : '';
  }
}

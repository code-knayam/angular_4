import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  
  @Input( 'servElement' )  element : { type: string, name: string, content: string };

  constructor() { 
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnIt called');
  }

}

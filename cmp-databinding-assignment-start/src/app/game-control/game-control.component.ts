import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  eventValue : number = 1;
  myInterval;
  
  @Output() gameEvent = new EventEmitter< {eventValue : number} >();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.startTimer( this.eventValue, this.gameEvent );
  }

  startTimer( eventValue : number, gameEvent ) {
    this.myInterval = setInterval( function() {      
       gameEvent.emit({ eventValue : eventValue }); 
       eventValue = eventValue + 1;
    }, 1000);    
  }

  onStopGame() {
    clearInterval( this.myInterval );
  }

}

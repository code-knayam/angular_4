import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenValues = [];
  oddValues = [];

  showComponent( eventData : { eventValue : number } ) {    
    if ( eventData.eventValue % 2 == 0) {
      this.evenValues.push(eventData.eventValue);
    } else {
      this.oddValues.push(eventData.eventValue);
    }
  }

}

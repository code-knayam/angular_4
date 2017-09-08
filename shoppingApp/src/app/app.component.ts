import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature: string = 'recipe';  

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDEzCIxODo1qBL5PM8PLA7mFyR5C5IwgeA",
      authDomain: "shoppingapp-72939.firebaseapp.com"
    });
  }

  onFeatureEvent(eventValue: string) {
    this.loadedFeature = eventValue;
  }

}

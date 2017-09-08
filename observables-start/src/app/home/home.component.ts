import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import "rxjs/Rx";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSubs : Subscription;
  myObsSubs: Subscription;

  constructor() { }

  ngOnInit() {

    //using in build observable functionality
    const myNumbers = Observable.interval(1000);
    this.numberObsSubs = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );


    //creating own observable from scratch
    const myObs = Observable.create( (observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("first package");
      }, 2000);
      setTimeout(() => {
        observer.next("Second package");
      }, 4000);
      setTimeout(() => {
        // observer.error("error");
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next("fourth package");
      }, 6000);
    });

    //listening to observer
    this.myObsSubs = myObs.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log("complete");
      }
    );


  }

  ngOnDestroy() {
    this.myObsSubs.unsubscribe();
    this.numberObsSubs.unsubscribe();
  }

}

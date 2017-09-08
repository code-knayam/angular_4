import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectStatus = ['Stable', 'Critical', 'Finished'];
  myForm : FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'projectName' : new FormControl(null, Validators.required, this.asyncForbiddenName),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(this.projectStatus[0])
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }

  forbiddenProjectName(control: FormControl) : { [s: string]: boolean } {
    const forbiddenName = "Test";
    if( control.value === forbiddenName ) {
      return { 'forbiddenName' : true };
    }
    return null;
  }

  asyncForbiddenName(control: FormControl) : Promise<any> | Observable<any> {
    const forbiddenName = "Test2";
    const promise = new Promise<any>( (resolve, reject) => {
      setTimeout( () => {
        if(control.value === forbiddenName) {
          resolve( {'forbiddenName': true} );
        } else {
          resolve(null);
        }
      }, 1500);
    } );

    return promise;
  }

}

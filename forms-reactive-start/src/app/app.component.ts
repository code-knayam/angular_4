import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUserNames= ['Chris', 'Anna'];
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenUser.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push( control );
  }

  forbiddenUser(control: FormControl) : { [s: string] : boolean } {

    if(this.forbiddenUserNames.indexOf(control.value) !== -1 ) {
      return { 'forbiddenUser': true }
    }
    return null;
  }

  forbiddenEmail(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>( (resolve, reject)=> {
      setTimeout( ()=> {
        if(control.value === 'test@test.com') {
          resolve({'forbiddenEmail': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }


}

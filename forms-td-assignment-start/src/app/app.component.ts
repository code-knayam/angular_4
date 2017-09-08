import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm : NgForm;
  defaultValue = "advanced";

  onSubmit() {
    const email = this.signUpForm.value.email;
    const subsc = this.signUpForm.value.subscription;
    const password = this.signUpForm.value.password;
    console.log(
      "Email : " + email + "\n" +
      "Subscription : " + subsc + "\n" +
      "Password : " + password + "\n"  
    );
  }

}

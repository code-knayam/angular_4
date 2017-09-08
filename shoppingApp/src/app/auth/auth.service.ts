import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    constructor(private router: Router) {}

    token: string;

    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)        
        .then(
            (response) => {
                console.log(response);
                this.setToken();
                this.router.navigate(['/']);
            }
        )
        .catch(
            error => console.log(error)
        );
    }

    signInUser(email: string, password:string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response) => {
                console.log(response);
                this.setToken();
                this.router.navigate(['/']);
            }
        )
        .catch(
            error => console.log(error)
        )
    }

    setToken() {
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => {
                this.token = token
            }
        );
    }

    getToken() {
        return this.token;
    }

    isLoggedIn() {
        return this.token != null;
    }

    logOutUser() {
        firebase.auth().signOut();
        this.token = null;
    }

}
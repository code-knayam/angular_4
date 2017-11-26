import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthService {

    constructor(private router: Router, private store: Store<fromApp.AppState>) {}

    // token: string;

    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)        
        .then(
            (response) => {
                this.store.dispatch(new AuthActions.SignUp());
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
                this.store.dispatch(new AuthActions.SignIn());
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
                this.store.dispatch(new AuthActions.SetToken(token));
            }
        );
    }

    // getToken() {
    //     return this.token;
    // }

    // isLoggedIn() {
    //     return this.token != null;
    // }

    logOutUser() {
        firebase.auth().signOut();
        // this.token = null;
        this.store.dispatch(new AuthActions.LogOut());
    }

}
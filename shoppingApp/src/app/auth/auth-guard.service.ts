import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromApp from "app/store/app.reducers";
import * as fromAuth from "app/auth/store/auth.reducers";

@Injectable()
export class AuthGuard implements CanActivate {
   
   constructor(private store: Store<fromApp.AppState>) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.store.select('auth')
        .take(1)
        .map( (authState : fromAuth.State) => {
            return authState.authenticated;
        } );
    }

}
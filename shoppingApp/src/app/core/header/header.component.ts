import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { DataStorageService } from "app/shared/data-storage.service";
import { AuthService } from "app/auth/auth.service";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as fromApp from 'app/store/app.reducers';
import * as fromAuth from 'app/auth/store/auth.reducers';
import * as AuthActions from 'app/auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component ({
    selector : 'app-header',
    templateUrl : './header.component.html'
})

export class HeaderComponent implements OnInit {
    authState: Observable<fromAuth.State>;

    constructor(private dataStorageService: DataStorageService, 
                private authService: AuthService,
                private store: Store<fromApp.AppState>) {}

    ngOnInit() {
        this.authState = this.store.select('auth');
    }    

    onSave() {
        // this.dataStorageService.saveRecipe().subscribe(
        //     (response) => console.log(response),
        //     (error) => console.log(error)
        // );
        this.store.dispatch(new RecipeActions.StoreRecipe());
    }

    onFetch() {
        // this.dataStorageService.fetchRecipe();
        this.store.dispatch(new RecipeActions.FetchRecipe() );
    }

    onLogOut() {
        // this.authService.logOutUser();        
        this.store.dispatch(new AuthActions.LogOut());
    }
}
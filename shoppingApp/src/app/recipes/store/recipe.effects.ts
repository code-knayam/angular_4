import { Actions, Effect } from "@ngrx/effects";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";

import * as RecipeActions from "../store/recipe.actions";
import { Recipe } from "app/recipes/recipe.model";
import * as fromRecipe from "../store/recipe.reducer";

@Injectable()
export class RecipeEffects {

    @Effect()
    recipeFetch = this.action$
        .ofType(RecipeActions.FETCH_RECIPE)
        .switchMap(
            (action: RecipeActions.FetchRecipe) => {
                return this.httpClient.get<Recipe[]>('https://shoppingapp-72939.firebaseio.com/recipe.json')                
            }
        )
        .map(
            (recipes) => {                
                for(let recipe of recipes ) {
                    if( !recipe['ingredients'] ) {
                        console.log(recipe);
                        recipe['ingredient'] = [];
                    }
                }
                return {
                    type: RecipeActions.SET_RECIPES,
                    payload: recipes
                };                
            }
        );


        @Effect({dispatch: false})
        recipeStore = this.action$
        .ofType(RecipeActions.STORE_RECIPE)
        .withLatestFrom(this.store.select('recipes'))
        .switchMap(
            ([action, state]) => {
                const req = new HttpRequest('PUT', 'https://shoppingapp-72939.firebaseio.com/recipe.json', state.recipes, {reportProgress: true} );
                return this.httpClient.request(req);
                // return this.httpClient.put(, state.recipes );
            }
        );

    constructor(private action$: Actions, 
                private httpClient : HttpClient,
                private store: Store<fromRecipe.FeatureState>) {}

}
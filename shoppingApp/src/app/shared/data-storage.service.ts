import { Response, Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/Rx";

import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService {

    constructor(
            private http: Http, 
            private recipeService: RecipeService,
            private authService: AuthService) {}

    saveRecipe() {
        const token = this.authService.getToken();
        return this.http.put('https://shoppingapp-72939.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes() );
    }

    fetchRecipe() {
        const token = this.authService.getToken();
        return this.http.get('https://shoppingapp-72939.firebaseio.com/recipe.json?auth=' + token)
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();                
                for(let recipe of recipes ) {
                    if( !recipe['ingredients'] ) {
                        console.log(recipe);
                        recipe['ingredient'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {                
                this.recipeService.setRecipe(recipes);
            }
        );
    }

}
import { Response, Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/Rx";
import { HttpClient } from "@angular/common/http";

import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService {

    constructor(
            private httpClient: HttpClient, 
            private recipeService: RecipeService,
            private authService: AuthService) {}

    saveRecipe() {
        // const token = this.authService.getToken();
        return this.httpClient.put('https://shoppingapp-72939.firebaseio.com/recipe.json', this.recipeService.getRecipes() );
    }

    fetchRecipe() {
        // const token = this.authService.getToken();
        return this.httpClient.get<Recipe[]>('https://shoppingapp-72939.firebaseio.com/recipe.json')
        .map(
            (recipes) => {                
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
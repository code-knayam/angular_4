import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store } from '@ngrx/store';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from "app/shopping-list/shopping.service";
import { RecipeService } from "app/recipes/recipe.service";
import * as ShoppingListActions from "../../shopping-list/store/shopping-list.actions";
import { Ingredient } from 'app/shared/ingredient.model';
import * as fromApp from "app/store/app.reducers";
import * as fromRecipe from "../store/recipe.reducer";
import { Observable } from 'rxjs/Observable';
import * as RecipeActions from "../store/recipe.actions";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  recipeState: Observable<fromRecipe.State>;
	id : number;
  
  constructor( private shoppingListService : ShoppingListService,
								private route: ActivatedRoute,                
								private recipeService : RecipeService,
                private router: Router,
                private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = params['id'];
				this.recipeState = this.store.select('recipes');
			}
		);		

  }

  onAddToShoppingList() {    
    this.store.select('recipes')
    .take(1)
    .subscribe(
      (recipeState : fromRecipe.State) => {
        this.store.dispatch(new ShoppingListActions.AddIngredients(
          recipeState.recipes[this.id].ingredients
        ));
        // this.showRecipe.ingredients
      }
    );
    // this.recipeService.addIngredientToShoppingList(this.showRecipe.ingredients);    
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    // this.recipeService.deleteRecipe( this.id );
    this.router.navigate(['/recipes']);
  }

}

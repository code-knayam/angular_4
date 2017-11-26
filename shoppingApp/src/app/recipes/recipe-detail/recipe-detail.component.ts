import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store } from '@ngrx/store';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from "app/shopping-list/shopping.service";
import { RecipeService } from "app/recipes/recipe.service";
import * as ShoppingListActions from "../../shopping-list/store/shopping-list.actions";
import { Ingredient } from 'app/shared/ingredient.model';
import * as fromApp from "app/store/app.reducers";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  showRecipe: Recipe;
	id : number;
  
  constructor( private shoppingListService : ShoppingListService,
								private route: ActivatedRoute,                
								private recipeService : RecipeService,
                private router: Router,
                private store: Store<fromApp.AppState>) { }

  ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = params['id'];
				this.showRecipe = this.recipeService.getRecipe( this.id );
			}
		);		

  }

  onAddToShoppingList() {    
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.showRecipe.ingredients));
    // this.recipeService.addIngredientToShoppingList(this.showRecipe.ingredients);    
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe( this.id );
    this.router.navigate(['/recipes']);
  }

}

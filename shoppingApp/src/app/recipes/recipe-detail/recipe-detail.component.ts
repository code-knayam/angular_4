import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { Recipe } from '../recipe.model';
import { ShoppingListService } from "app/shopping-list/shopping.service";
import { RecipeService } from "app/recipes/recipe.service";

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
                private router: Router) { }

  ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = params['id'];
				this.showRecipe = this.recipeService.getRecipe( this.id );
			}
		);		

  }

  onAddToShoppingList() {    
    this.shoppingListService.addItems( this.showRecipe.ingredients );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe( this.id );
    this.router.navigate(['/recipes']);
  }

}

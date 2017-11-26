import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { Subject } from "rxjs/Subject";
// import { Injectable } from "@angular/core";
// import { Store } from "@ngrx/store";

// import { ShoppingListService } from "app/shopping-list/shopping.service";
// import * as ShoppingListActions from "../shopping-list/store/shopping-list.actions";

// @Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe( 
      'TestRecipe 1', 
      'Simply a test', 
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg', 
      [
        new Ingredient( 'Apple', 10 ),
        new Ingredient( 'Banana', 20 )
      ]),      
    new Recipe( 
      'TestRecipe 2', 
      'Simply a test 2', 
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg', 
      [
        new Ingredient( 'Mango', 30 ),
        new Ingredient( 'Berry', 35 )
      ])
  ];

  // constructor(private shoppingListService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {}

  getRecipes() {
      return this.recipes.slice();
  }

  getRecipe( index: number) {
      return this.recipes[index];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push( newRecipe );
    this.recipeChanged.next( this.recipes.slice() );
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next( this.recipes.slice() );
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next( this.recipes.slice() );
  }

  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next( this.recipes.slice() );
  }

  // addIngredientToShoppingList(ingredients: Ingredient[]) {
  //   // this.shoppingListService.addItems( ingredients );
  //   this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  // }

}
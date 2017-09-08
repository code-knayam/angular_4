import { Ingredient } from "app/shared/ingredient.model";
import { Subject } from "rxjs/Subject";
export class ShoppingListService {

  ingredientAdded = new Subject<Ingredient[]>();  
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient( 'Test Ingredient', 10),
    new Ingredient( 'Test Ingredient 2', 20)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addItem( ingredient : Ingredient ) {
    this.ingredients.push( ingredient );
    this.ingredientAdded.next( this.getIngredients() );
  }

  addItems( ingredient : Ingredient[] ) {
    this.ingredients.push( ...ingredient );
    
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next( this.getIngredients() );
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next( this.getIngredients() );
  }

}
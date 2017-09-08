import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "app/shopping-list/shopping.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  subsciption: Subscription;

  constructor( private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subsciption = this.shoppingListService.ingredientAdded.subscribe(
      (ingredient : Ingredient[]) => {
        this.ingredients = ingredient
      }
    );
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}

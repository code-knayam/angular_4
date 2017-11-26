import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "app/shopping-list/shopping.service";
import { Subscription } from "rxjs/Subscription";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromApp from "app/store/app.reducers";
import * as ShoppingListActions from "app/shopping-list/store/shopping-list.actions";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  // ingredients: Ingredient[] = [];
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  // subsciption: Subscription;

  constructor( private shoppingListService : ShoppingListService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListState = this.store.select('shoppingList');
    // this.subsciption = this.shoppingListService.ingredientAdded.subscribe(
    //   (ingredient : Ingredient[]) => {
    //     this.ingredients = ingredient
    //   }
    // );
  }

  ngOnDestroy() {
    // this.subsciption.unsubscribe();
  }

  onEditItem(index: number) {
    this.store.dispatch( new ShoppingListActions.StartEdit(index));
    // this.shoppingListService.startedEditing.next(index);
  }

}

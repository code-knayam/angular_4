import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
import { Store } from '@ngrx/store';

import * as ShoppingListActions from '../store/shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from "app/shopping-list/shopping.service";
import * as fromApp from "app/store/app.reducers";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  // editedItemIndex: number;
  editedItem: Ingredient;
  editMode = false;

  constructor( private shoppingListService : ShoppingListService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(
      data => {
        if(data.editedIngridientIndex > -1) {
          this.editedItem = data.editedIngridient;
          this.editMode = true;
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        } else {
          this.editMode = false;
        }
      }
    );

    // this.subscription = this.shoppingListService.startedEditing.subscribe(
    //   (index: number) => {
    //     this.editedItemIndex = index;
    //     this.editMode = true;
    //     this.editedItem = this.shoppingListService.getIngredient(index);
    //     this.slForm.setValue({
    //       name: this.editedItem.name,
    //       amount: this.editedItem.amount
    //     });
    //   }
    // );
  }
  
  ngOnDestroy(): void {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const value = this.slForm.value;
    const newIngredient = new Ingredient( value.name, value.amount);
    if ( this.editMode ) {
      // this.shoppingListService.updateIngredient( this.editedItemIndex, newIngredient);
      this.store.dispatch( new ShoppingListActions.UpdateIngredient({ingredient: newIngredient}));
    } else {
      // this.shoppingListService.addItem( newIngredient );      
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.store.dispatch( new ShoppingListActions.DeleteIngredient());
    // if ( this.editMode ) {
    //   this.shoppingListService.deleteIngredient( this.editedItemIndex);
    // }
    this.onClear();
  }

}

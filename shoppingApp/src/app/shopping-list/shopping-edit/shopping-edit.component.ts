import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from "app/shopping-list/shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editedItemIndex: number;
  editedItem: Ingredient;
  editMode = false;

  constructor( private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const value = this.slForm.value;
    const newIngredient = new Ingredient( value.name, value.amount);
    if ( this.editMode ) {
      this.shoppingListService.updateIngredient( this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addItem( newIngredient );      
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    if ( this.editMode ) {
      this.shoppingListService.deleteIngredient( this.editedItemIndex);
    }
    this.onClear();
  }

}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ShoppingEditComponent } from "app/shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent, 
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule {

}
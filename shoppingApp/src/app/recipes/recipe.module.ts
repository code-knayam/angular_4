import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipeItemComponent } from "app/recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "app/recipes/recipe-list/recipe-list.component";
import { RecipesComponent } from "app/recipes/recipes.component";
import { RecipeRoutingModule } from "app/recipes/recipe-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { recipeReducer } from "app/recipes/store/recipe.reducer";
import { EffectsModule } from "@ngrx/effects";
import { RecipeEffects } from "app/recipes/store/recipe.effects";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent
    ],
    imports : [
        CommonModule,
        RecipeRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forFeature('recipes', recipeReducer),
        EffectsModule.forFeature([RecipeEffects])
    ]
})
export class RecipeModule {

}
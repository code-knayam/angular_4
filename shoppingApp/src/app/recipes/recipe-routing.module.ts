import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "app/recipes/recipes.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { AuthGuard } from "app/auth/auth-guard.service";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";

const recipeRoute: Routes = [
    { path: '', component: RecipesComponent, children: [
        {path : '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ] }
]

@NgModule({
    imports: [
        RouterModule.forChild( recipeRoute )
    ],
    exports : [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})
export class RecipeRoutingModule {

}
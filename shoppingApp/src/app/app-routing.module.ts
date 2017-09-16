import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { ErrorPageComponent } from "app/error-page/error-page.component";
import { HomeComponent } from "app/core/home/home.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";

const appRoutes : Routes = [
    { path: '', component: HomeComponent },  
    { path: 'recipes', loadChildren: './recipes/recipe.module#RecipeModule'},  
    { path: 'shopping-list', component: ShoppingListComponent },    
    { path: 'not-found', component: ErrorPageComponent }
    // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes, {preloadingStrategy: PreloadAllModules} )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
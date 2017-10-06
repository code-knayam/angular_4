import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HeaderComponent } from "app/core/header/header.component";
import { HomeComponent } from "app/core/home/home.component";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutingModule } from "app/app-routing.module";
import { AuthService } from "app/auth/auth.service";
import { DataStorageService } from "app/shared/data-storage.service";
import { RecipeService } from "app/recipes/recipe.service";
import { ShoppingListService } from "app/shopping-list/shopping.service";
import { AuthInterceptor } from "app/shared/auth.interceptor";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService, 
        RecipeService, 
        DataStorageService, 
        AuthService,    
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
})
export class CoreModule {
    
}
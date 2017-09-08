import { Component} from '@angular/core';
import { DataStorageService } from "app/shared/data-storage.service";
import { AuthService } from "app/auth/auth.service";

@Component ({
    selector : 'app-header',
    templateUrl : './header.component.html'
})

export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

    onSave() {
        this.dataStorageService.saveRecipe().subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

    onFetch() {
        this.dataStorageService.fetchRecipe();
    }

    onLogOut() {
        this.authService.logOutUser();
    }

}
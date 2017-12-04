import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Store } from '@ngrx/store';
import { Subscription } from "rxjs/Subscription";
import { Observable } from 'rxjs/Observable';

import { Recipe } from '../recipe.model';
import { RecipeService } from "app/recipes/recipe.service";
import * as fromRecipe from "../store/recipe.reducer";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  // subscription: Subscription;
  recipeState: Observable<fromRecipe.State>;

  constructor( private recipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute,
                private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
    // this.subscription = this.recipeService.recipeChanged.subscribe(
    //   (recipes: Recipe[]) => {
    //     this.recipes = recipes;
    //   }
    // );
    // this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

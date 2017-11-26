import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeForm: FormGroup;
  id: number;
  editMode: boolean = false;
  imagePath: string;

  constructor(private route : ActivatedRoute, 
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {

    let recipeName = "";
    let recipeImagePath = "";
    let recipeDesc = "";
    let recipeIngredients = new FormArray([]);

    if ( this.editMode ) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDesc = recipe.description;

      if( recipe['ingredients'] ) {
        for ( let ingredient of recipe.ingredients) {
          recipeIngredients.push(
          new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ]),
            })
          );
        }        
      }       
    }
    
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDesc, Validators.required),
      ingredients: recipeIngredients
    });

  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    );
    if( this.editMode ) {
      this.recipeService.updateRecipe( this.id, newRecipe );      
    } else {
      this.recipeService.addRecipe( newRecipe );      
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ])
      })
    );
  }
 
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}
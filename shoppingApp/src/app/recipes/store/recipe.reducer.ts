import { Recipe } from '../recipe.model';
import { Ingredient } from 'app/shared/ingredient.model';

export interface FeatureState {
  recipes: State
}

export interface State {
    recipes: Recipe[]
}

const initialState : State = {
    recipes: [
        new Recipe( 
          'TestRecipe 1', 
          'Simply a test', 
          'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg', 
          [
            new Ingredient( 'Apple', 10 ),
            new Ingredient( 'Banana', 20 )
          ]),      
        new Recipe( 
          'TestRecipe 2', 
          'Simply a test 2', 
          'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg', 
          [
            new Ingredient( 'Mango', 30 ),
            new Ingredient( 'Berry', 35 )
          ])
      ]
}

export function recipeReducer(state = initialState, action) {
    return state;
}
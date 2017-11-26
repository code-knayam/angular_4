import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from 'app/shared/ingredient.model';

export interface AppState {
    shoppingList : State
}

export interface State {
    ingredients : Ingredient[],
    editedIngridient : Ingredient,
    editedIngridientIndex  : number
}

const initialState : State = {
    ingredients: [
        new Ingredient('Test Ingredient', 10),
        new Ingredient('Test Ingredient 2', 20)
    ],
    editedIngridient : null,
    editedIngridientIndex: -1
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state, 
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngridientIndex];
            const updatedIngredient = {
                ...ingredient, 
                ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngridientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIngridientIndex, 1);
            return {
                ...state, 
                ingredients: oldIngredients
            };
        case ShoppingListActions.START_EDIT:
            const editedIngridient  = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngridient: editedIngridient, 
                editedIngridientIndex: action.payload
            };
        default:
            return state;
    }
}
import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[];
    ingredientChanged = new EventEmitter<Ingredient[]>();  

    constructor() {
        this.ingredients = [ 
            new Ingredient('Apple', 5),
            new Ingredient('Tomato ', 10),
            new Ingredient('Green Chilly', 1),
        ]
    }

    getIngredients(){
       return this.ingredients.slice();
    }

    addIngredients(Ingredient: Ingredient) {
        this.ingredients.push(Ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}
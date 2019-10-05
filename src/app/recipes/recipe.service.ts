import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { Recipe } from './recipe.model';
import {ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Speedy Tomato Pasta',
            'This is simply a Speedy Tomato Pasta Recipe',
            'https://deliciouslyella.com/wp-content/uploads/2019/07/speedy-tomato-pasta-recipe-2.jpg',
            [new Ingredient('Tomato', 2), new Ingredient('Pasta', 200)]
        ),
        new Recipe(
            'Super Burger Mania',
            'This is simply a Super Burger Mania Recipe',
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
            [new Ingredient('Bread', 1), new Ingredient('Fries', 1)]
        )];

        constructor(private shoppingListService: ShoppingListService){}


    getRecipes() {
        return this.recipes.slice();
    }

    addToShoppingList(ingredients: Ingredient[]) {
            this.shoppingListService.addIngredientsToShoppingList(ingredients);
    }

}
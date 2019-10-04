import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor() {
    this.ingredients = [
      new Ingredient('Apple', 5),
      new Ingredient('Tomato', 10),
      new Ingredient('Green Chilly', 1)
    ];
  }

  ngOnInit() {
  }

  onIngredientAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}

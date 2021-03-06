import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [ 
    new Recipe('Speedy Tomato Pasta', 'This is simply a Speedy Tomato Pasta Recipe', 'https://deliciouslyella.com/wp-content/uploads/2019/07/speedy-tomato-pasta-recipe-2.jpg'),
    new Recipe('Super Burger Mania', 'This is simply a Super Burger Mania Recipe', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg')];

    @Output() recipeSelection = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeSelection.emit(recipe);
  }

}

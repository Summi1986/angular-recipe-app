import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef; 
  @ViewChild('amountInput') amountInputRef : ElementRef; 

  @Output() addIngredient = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    
   this.addIngredient.emit(new Ingredient(name, amount))
  }

}

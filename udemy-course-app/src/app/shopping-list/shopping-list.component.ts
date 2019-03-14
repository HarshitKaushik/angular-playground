import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: any = [];

  constructor() {
    this.ingredients.push(new Ingredient('Potato', 5));
    this.ingredients.push(new Ingredient('Tomato', 5));
  }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

}

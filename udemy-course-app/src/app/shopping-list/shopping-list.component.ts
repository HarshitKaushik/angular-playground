import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Potato', 5),
    new Ingredient('Tomato', 5),
  ];

  constructor() { }

  ngOnInit() {
  }

}

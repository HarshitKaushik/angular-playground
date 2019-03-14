import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeObj') recipe: Recipe;
  @Output('recipeSelected') recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(): void {
    this.recipeSelected.emit();
  }

}

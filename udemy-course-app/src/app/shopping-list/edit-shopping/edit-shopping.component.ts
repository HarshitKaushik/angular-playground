import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from './../../recipes/ingredient.model';

@Component({
  selector: 'app-edit-shopping',
  templateUrl: './edit-shopping.component.html',
  styleUrls: ['./edit-shopping.component.scss']
})
export class EditShoppingComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(newIngredient);
  }

}

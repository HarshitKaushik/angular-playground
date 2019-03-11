import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showRecipes = true;
  showShoppingList = false;

  onNavigate(feature: string) {
    if (feature === 'recipes') {
      this.showRecipes = true;
      this.showShoppingList = false;
    } else if (feature === 'shopping-list') {
      this.showShoppingList = true;
      this.showRecipes = false;
    }
  }
}

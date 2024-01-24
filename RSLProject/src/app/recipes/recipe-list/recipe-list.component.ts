import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7hFmyFR447L9WnDB7PQ7Mh0rQBbthcGguQ&usqp=CAU' ),
    new Recipe('A Test Recipe','This is simply a test', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7hFmyFR447L9WnDB7PQ7Mh0rQBbthcGguQ&usqp=CAU' )
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

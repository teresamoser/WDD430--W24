import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7hFmyFR447L9WnDB7PQ7Mh0rQBbthcGguQ&usqp=CAU' ),
        new Recipe('Another Test Recipe','This is simply a test', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7hFmyFR447L9WnDB7PQ7Mh0rQBbthcGguQ&usqp=CAU' )
      ]; 

    getRecipes(){
        return this.recipes.slice();
    }
}
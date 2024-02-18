import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Empanadas (Beef Turnovers)',
            'Pastry rounds and a mouthwatering filling of seasoned ground beef, tomatoes, onions, and garlic', 
            'https://www.allrecipes.com/thmb/ClVUDKHEixA1Fu6kzjronzJcInc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1034561-empanadas-beef-turnovers-Janet-Henderson-4x3-1-a658a394cfc34f54b1ca408bc931f007.jpg',
            [
                new Ingredient('Beef', 1),
                new Ingredient('Pastry', 10)
            ] ),
        new Recipe(
            'Manicotti',
            'This manicotti recipe makes a comforting dinner your family will love. The kids like to help stuff the noodles too! Delicious served with a crispy salad and garlic bread.', 
            'https://www.allrecipes.com/thmb/fYBgHyOrTFXNc1nZMkHFDmk6QOU=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(639x0:641x2):format(webp)/Manicotti-19201058c06a4eb89ed6f4cc44e65bb7.jpg', 
            [
                new Ingredient('Manicotti', 12),
                new Ingredient('Ricotta Cheese', 1)
            ] )
      ]; 

    constructor(private slService: ShoppingListService) {}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
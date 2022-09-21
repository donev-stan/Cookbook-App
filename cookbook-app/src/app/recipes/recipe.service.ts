import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Lasagna',
      'This is a recipe for the best lasagna!',
      'https://static01.nyt.com/images/2021/08/18/dining/12SAFFRONREX-Saffron-Salmon-Kebabs-copy/06SAFFRONREX-Saffron-Salmon-Kebabs-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      [new Ingredient('Meat', 1), new Ingredient('Fries', 20)]
    ),
    new Recipe(
      'Bob',
      'This is a recipe for a mandja - bob!',
      'https://static01.nyt.com/images/2021/08/18/dining/12SAFFRONREX-Saffron-Salmon-Kebabs-copy/06SAFFRONREX-Saffron-Salmon-Kebabs-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }
}

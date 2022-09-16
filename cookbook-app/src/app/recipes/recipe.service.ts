import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Lasagna',
      'This is a recipe for the best lasagna!',
      'https://static01.nyt.com/images/2021/08/18/dining/12SAFFRONREX-Saffron-Salmon-Kebabs-copy/06SAFFRONREX-Saffron-Salmon-Kebabs-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    ),
    new Recipe(
      'Bob',
      'This is a recipe for a mandja - bob!',
      'https://static01.nyt.com/images/2021/08/18/dining/12SAFFRONREX-Saffron-Salmon-Kebabs-copy/06SAFFRONREX-Saffron-Salmon-Kebabs-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}

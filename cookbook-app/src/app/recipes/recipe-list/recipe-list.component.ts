import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}

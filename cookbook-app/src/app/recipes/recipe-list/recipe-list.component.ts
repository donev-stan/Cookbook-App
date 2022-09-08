import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://static01.nyt.com/images/2021/08/18/dining/12SAFFRONREX-Saffron-Salmon-Kebabs-copy/06SAFFRONREX-Saffron-Salmon-Kebabs-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    ),
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://static01.nyt.com/images/2021/08/18/dining/12SAFFRONREX-Saffron-Salmon-Kebabs-copy/06SAFFRONREX-Saffron-Salmon-Kebabs-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

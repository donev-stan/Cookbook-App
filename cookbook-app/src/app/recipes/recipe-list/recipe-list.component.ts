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
      'https://unsplash.com/photos/vuDXJ60mJOA'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

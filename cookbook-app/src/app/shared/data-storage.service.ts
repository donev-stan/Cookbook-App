import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    // Sending a put requiest to a URL, any data ther will be overwritten
    this.http
      .put(
        `https://cookbook---angular-default-rtdb.europe-west1.firebasedatabase.app/recipes.json`,
        recipes
      )
      .subscribe();
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        `https://cookbook---angular-default-rtdb.europe-west1.firebasedatabase.app/recipes.json`
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        })
      )
      .subscribe({
        next: (recipes) => {
          this.recipeService.setRecipes(recipes);
        },
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}

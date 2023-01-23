import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

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
    // this.authService.user.subscribe().unsubscribe(); --- take would take 1 emitted value and then unsubscribe
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<Recipe[]>(
          `https://cookbook---angular-default-rtdb.europe-west1.firebasedatabase.app/recipes.json`,
          {
            params: new HttpParams().set('auth', user.token),
          }
        );
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => this.recipeService.setRecipes(recipes))
    );

    // exhaustMap ->
    // We get the data from the first observable (user)
    // After that we pass a new observable which will replace the previous one

    // return this.http
    //   .get<Recipe[]>(
    //     `https://cookbook---angular-default-rtdb.europe-west1.firebasedatabase.app/recipes.json`
    //   )
    //   .pipe(
    //     map((recipes) => {
    //       return recipes.map((recipe) => {
    //         return {
    //           ...recipe,
    //           ingredients: recipe.ingredients ? recipe.ingredients : [],
    //         };
    //       });
    //     }),
    //     tap((recipes) => this.recipeService.setRecipes(recipes))
    //   );
  }
}

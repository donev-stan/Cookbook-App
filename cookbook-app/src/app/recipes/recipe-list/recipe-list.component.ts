import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

    this.recipeService.recipesChanged.subscribe({
      next: (recipes: Recipe[]) => {
        this.recipes = recipes;
      },
    });
  }

  onNewRecipe(): void {
    // this.router.navigate(['/recipes/new']);
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}

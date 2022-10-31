import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number = 0;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe({
      next: (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      },
    });
  }

  onAddItem(form: NgForm): void {
    // const ingredientName = this.nameInputRef.nativeElement.value;
    // const ingredientAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    // this.slService.addIngredient(newIngredient);

    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

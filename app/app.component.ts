import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template:`
    <div class="container">
      <h1>MealTracker</h1>
      <hr>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealClicked($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent{
  public meals: Meal[];
  constructor(){
    this.meals =[
      new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354, 0),
      new Meal("Fries", "I only ate half of them.", 365, 1),
      new Meal("Crackers", "8 Crackers", 200, 1)
    ];
  }
  mealClicked(clickedMeal: Meal): void {
    console.log("parent", clickedMeal);
  }
}

import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
    <ul>
      <li> Details: {{ meal.details }}</li>
      <li> Calories: {{ meal.calories }}</li>
    </ul>
  `
})

export class MealDetails {
  public meal: Meal;
}

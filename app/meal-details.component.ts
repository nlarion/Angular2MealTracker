import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
    <div>
      <h4> Details: {{ meal.details }}</h4>
      <h4> Calories: {{ meal.calories }}</h4>
    <div>
  `
})

export class MealDetails {
  public meal: Meal;
}

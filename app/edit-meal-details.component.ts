import {Component, EventEmitter } from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div id="editTop" class="row">
    <h1>Edit Meal:</h1>
    <h3>Edit Name:</h3>
    <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-form"/>
  </div>
  <div class="row">
    <h3>Edit Details:</h3>
    <input [(ngModel)]="meal.details" class="col-sm-8 input-lg meal-form"/>
  </div>
  <div id="editBottom" class="row">
    <h3>Edit Calories:</h3>
    <input [(ngModel)]="meal.calories" type="number" class="col-sm-8 input-lg meal-form"/>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}

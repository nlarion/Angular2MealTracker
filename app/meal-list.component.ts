import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDetails } from './meal-details.component';
import { MealComponent } from './meal-display.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';
import { CalorieTotalComponent } from './calorie-total.component';
import { CalorieAverageComponent } from './calorie-average.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives:[MealComponent, MealDetails, EditMealDetailsComponent, NewMealComponent, CalorieTotalComponent, CalorieAverageComponent],
  template: `
  <div class="row">
    <div class="col-sm-6">
      <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">Show All</option>
        <option value="low">Show Low Calorie Meals</option>
        <option value="notLow" >Show Not Low Calorie Meals</option>
      </select>
      <meal-display *ngFor="#currentMeal of mealList | lowCal:filterLow"
        (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal"
        [meal]="currentMeal"
        [class.zBeer]="currentMeal.price < 5">
      </meal-display>
      <meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
      </meal-details>
    </div>
    <div class="col-sm-6">
      <edit-meal-details class="edit" *ngIf="selectedMeal" [meal]="selectedMeal">
      </edit-meal-details>
      <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
      <calorie-total [mealList]="mealList"></calorie-total>
      <calorie-average [mealList]="mealList"></calorie-average>
    </div>
  </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<any>;
  public selectedMeal: Meal;
  public filterLow: string = "All";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log("child", clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(holder: Array<any>): void {
    this.mealList.push(
      new Meal(holder[0], holder[1], holder[2], this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
  }
}

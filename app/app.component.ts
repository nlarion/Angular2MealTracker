import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>{{ meal.name }}</h3>
    <ul>
      <li> Details: {{ meal.details }}</li>
      <li> Calories: {{ meal.calories }}</li>
    </ul>
  `
})

export class MealComponent {
  public meal: Meal;
}

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives:[MealComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="low">Show Low</option>
    <option value="notLow" >Show Not Low</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList"
  (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal"
  [meal]="currentMeal"
  [class.zBeer]="currentMeal.price < 5">
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<any>;
  public selectedMeal: Meal;
  public filterLow: string = "All";
  public filterLowPints: string = "All";
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
      new Meal("Fries", "I only ate half of them.", 365, 1)
    ];
  }
  mealClicked(clickedMeal: Meal): void {
    console.log("parent", clickedMeal);
  }
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number, public id: number){
  }
}

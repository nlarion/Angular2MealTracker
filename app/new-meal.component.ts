import {Component, EventEmitter } from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <div class="row">
      <h3>Create Meal:</h3>
      <input placeholder="Meal Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Meal Description" class="col-sm-8 input-lg" #newDescription>
      <input placeholder="Meal Calories" class="col-sm-8 input-lg" #newCalories>
    </div>
    <br>
    <div class="row">
      <button (click)="addMeal(newName, newDescription, newCalories)" class="btn btn-danger">Add</button>
    </div>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<any>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userMealName: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement){
    console.log("Creating meal...");
    var holder = [userMealName.value, userDescription.value, userCalories.value];
    this.onSubmitNewMeal.emit(holder);
    userMealName.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}

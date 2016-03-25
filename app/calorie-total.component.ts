import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'calorie-total',
  inputs: ['mealList'],
  template: `
  <h3>Your Total Calories: {{ totalCalories() }}</h3>
  `
})

export class CalorieTotalComponent {
  public mealList: Meal[];
  totalCalories(){
    var total = 0;
    for(var i = 0; i < this.mealList.length; i++){
      total += this.mealList[i].calories;
    }
    return total;
  }
}

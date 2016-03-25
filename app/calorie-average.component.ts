import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'calorie-average',
  inputs: ['mealList'],
  template: `
  <h3>Your Average Calories: {{ averageCalories() }}</h3>
  `
})

export class CalorieAverageComponent {
  public mealList: Meal[];
  averageCalories(){
    var average = 0;
    for(var i = 0; i < this.mealList.length; i++){
      average += this.mealList[i].calories;
    }
    return Math.floor(average/this.mealList.length);
  }
}

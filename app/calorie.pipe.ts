import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "lowCal",
  pure: false
})

export class CaloriePipe implements PipeTransform{
  transform(input: Meal[], args){
    var desiredMealState = args[0];
    if(desiredMealState === "low"){
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if (desiredMealState === "notLow"){
      return input.filter((meal) => {
          return meal.calories >= 299;
      });
    } else {
      return input;
    }
  }
}

interface IMeal {
  name: string;
  details: string;
  calories: number;
  id: number;
}

export class Meal implements Meal {
  constructor(public name: string, public details: string, public calories: number, public id: number){
  }
}

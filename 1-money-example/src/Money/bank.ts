import { Money, Expression } from "./money"
import { Pair } from "./pair";

export class Bank {
  private rates = new Map<string, number>() ;
  reduce = (source: Expression, to: string): Money => {
    return source.reduce(this, to);
  }
  
  addRate = (from: string, to: string, rate: number):void =>{
    this.rates.set(new Pair(from, to).value(), rate)
  }

  rate = (from: string, to: string): number => {
    if(from===to){
      return 1;
    }
    return this.rates.get(`${from}:${to}`)!;
  }
}
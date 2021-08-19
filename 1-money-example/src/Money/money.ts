export class Dollar {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  times = (multiplier: number): Dollar => {
    return new Dollar(multiplier * this.amount);
  };
  equals = (obj: Dollar): boolean => {
    const dollar = obj;
    return this.amount == dollar.amount;
  };
}

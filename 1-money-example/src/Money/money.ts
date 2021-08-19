class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  equals = (obj: Money): boolean => {
    const money = obj;
    return this.amount == money.amount;
  };
}

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times = (multiplier: number): Dollar => {
    return new Dollar(multiplier * this.amount);
  };
}

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times = (multiplier: number): Franc => {
    return new Franc(multiplier * this.amount);
  };
}

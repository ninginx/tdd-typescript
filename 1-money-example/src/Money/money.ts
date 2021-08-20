class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  equals = ({ amount, constructor }: Money): boolean => {
    return this.amount === amount && this.constructor.name === constructor.name;
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

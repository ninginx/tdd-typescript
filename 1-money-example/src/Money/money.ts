export abstract class Money {
  protected amount: number;
  protected currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar = (amount: number): Money => {
    return new Dollar(amount);
  };

  static franc = (amount: number): Money => {
    return new Franc(amount);
  };
  equals = ({ amount, constructor }: Money): boolean => {
    return this.amount === amount && this.constructor.name === constructor.name;
  };

  abstract times(multiplier: number): Money;

  myCurrency = (): string => {
    return this.currency;
  };
}

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount, 'USD');
  }
  times = (multiplier: number): Dollar => {
    return new Dollar(multiplier * this.amount);
  };
}

export class Franc extends Money {
  constructor(amount: number) {
    super(amount, 'CHF');
  }
  times = (multiplier: number): Dollar => {
    return new Franc(multiplier * this.amount);
  };
}

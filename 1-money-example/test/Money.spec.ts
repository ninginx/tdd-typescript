import {  Money, Bank } from '../src/Money';

describe('多国通貨対応', () => {

  it('test multiplication', () => {
    const fiveDollar: Money = Money.dollar(5);
    expect(fiveDollar.times(2).equals(Money.dollar(10))).toBe(true);
    expect(fiveDollar.times(3).equals(Money.dollar(15))).toBe(true);
  });

  it('test Fran Multiplication', () => {
    const fiveFran: Money = Money.franc(5);
    expect(fiveFran.times(2).equals(Money.franc(10))).toBe(true);
    expect(fiveFran.times(3).equals(Money.franc(15))).toBe(true);
  });

  it('test dollar equality true', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  });

  it('test dollar equality false', () => {
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  });

  it('test franc & dollar equality false', () => {
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  it('test dollar currency', () => {
    expect(Money.dollar(5).myCurrency()).toEqual('USD');
  });

  it('test franc currency', () => {
    expect(Money.franc(5).myCurrency()).toEqual('CHF');
  });

  it('test simple addition',()=>{
    const bank = new Bank();
    const sum = Money.dollar(5).plus(Money.dollar(5))
    const reduced: Money = bank.reduce(sum, "USD");
    expect(reduced.equals(Money.dollar(10))).toBe(true)

  })

});

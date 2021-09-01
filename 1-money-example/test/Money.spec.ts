import {  Money, Bank, Expression, Sum } from '../src/Money';

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

  it('test plus return sum', ()=>{
    const fiveDollar = Money.dollar(5)
    const result: Expression = fiveDollar.plus(fiveDollar);
    //todo: cast 変換は消したい
    const sum: Sum = result as Sum;
    expect(fiveDollar).toEqual(sum.augend);
    expect(fiveDollar).toEqual(sum.addend);
  })

  it('test reduce sum by Bank', ()=>{
    const sum: Expression = new Sum(Money.dollar(3),Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, "USD");
    expect(Money.dollar(7).equals(result)).toBe(true);
  })

  it('test reduce Money', ()=>{
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1),"USD");
    expect(result.equals(Money.dollar(1))).toBe(true);
  })
});

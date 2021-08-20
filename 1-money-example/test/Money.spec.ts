import { Dollar, Franc, Money } from '../src/Money';

describe('多国通貨対応', () => {
  //todo:
  // $5 + 10 CHF = 10$(レートが2:1の場合)
  // ✅　$5 * 2 = $10
  // ✅ amountをprivateにする
  // ✅　Dollarの副作用をどうするか
  // Moneyの丸め処理はどうするか？
  // ✅ equals()
  // hashCode()
  // nullとの等価性比較
  // 他のオブジェクトとの等価性比較
  // ✅ 5CHF * 2 = 10 CHF
  // DollarとFrancの重複
  // equalsの一般化
  // timesの一般化

  // it('$5 + 10 CHF = 10$(レートが2:1の場合)', () => {
  //   const fiveDollar = new Dollar(5);
  //   expect(fiveDollar.times(2)).toEqual(10);
  // });

  it('test multiplication', () => {
    const fiveDollar: Money = Money.dollar(5);
    expect(fiveDollar.times(2).equals(Money.dollar(10))).toBe(true);
    expect(fiveDollar.times(3).equals(Money.dollar(15))).toBe(true);
  });

  it('test dollar equality true', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  });

  it('test dollar equality false', () => {
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  });

  it('test franc equality true', () => {
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
  });

  it('test franc equality false', () => {
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
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

  it('test Fran Multiplication', () => {
    const fiveFran: Money = Money.franc(5);
    expect(fiveFran.times(2).equals(Money.franc(10))).toBe(true);
    expect(fiveFran.times(3).equals(Money.franc(15))).toBe(true);
  });
});

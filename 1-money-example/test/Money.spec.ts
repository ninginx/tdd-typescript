import { Dollar, Franc } from '../src/Money';

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
    const fiveDollar = new Dollar(5);
    expect(fiveDollar.times(2).equals(new Dollar(10))).toBe(true);
    expect(fiveDollar.times(3).equals(new Dollar(15))).toBe(true);
  });

  it('test dollar equality true', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  });

  it('test dollar equality false', () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });

  it('test franc equality true', () => {
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
  });

  it('test franc equality false', () => {
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
  });

  it('test Fran Multiplication', () => {
    const fiveFran = new Franc(5);
    expect(fiveFran.times(2).equals(new Franc(10))).toBe(true);
    expect(fiveFran.times(3).equals(new Franc(15))).toBe(true);
  });
});

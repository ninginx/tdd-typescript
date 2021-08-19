import { Dollar } from '../src/Money';

describe('多国通貨対応', () => {
  //todo:
  // $5 + 10 CHF = 10$(レートが2:1の場合)
  // amountをprivateにする
  // Dollarの副作用どうするか？
  // Moneyの丸め処理はどうするか？

  // it('$5 + 10 CHF = 10$(レートが2:1の場合)', () => {
  //   const fiveDollar = new Dollar(5);
  //   expect(fiveDollar.times(2)).toEqual(10);
  // });

  // Dollarの副作用どうするか？
  it('test multiplication', () => {
    const fiveDollar = new Dollar(5);
    fiveDollar.times(2);
    expect(fiveDollar.amount).toEqual(10);
  });
});

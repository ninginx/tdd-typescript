## 第一部 多国通貨

### 第5章 原則をあえて破る時

#### TODO
* [ ] $5 + 10CHF = $10
* [x] $5 * 2 = $10
* [ ] amountをprivateにする
* [x] Dollar sideeffect
* [ ] Moneyの丸め処理
* [ ] *equals()*
* [ ] hashCode
* [ ] nullとの等価性能比較
* [ ] 他のオブジェクトとの等価性能比較
* [ ] **5CHF * 2 = 10CHF**

1. テストを書く
2. コンパイラを通す
3. テストを走らせ、失敗を確認する
4. テストを通す
5. 重複を排除する

#### この章の振り返り

* 大きいテストに立ち向かうにはまだ早かったので、次の一歩を進めるために小さなテストを捻り出した
* 恥知らずにも既存のテストをコピー&ペーストして、テストを作成した
* さらに恥知らずにも、既存のモデルコードを丸ごとコピー&ペーストしてテストを通した
* この重複を排除するまでは家に帰らないと心に決めた

### 第6章 テスト不足に気づいたら

#### TODO
* [ ] $5 + 10CHF = $10
* [x] $5 * 2 = $10
* [x] amountをprivateにする
* [x] Dollar sideeffect
* [ ] Moneyの丸め処理
* [x] *equals()*
* [ ] hashCode
* [ ] nullとの等価性能比較
* [ ] 他のオブジェクトとの等価性能比較
* [x] 5CHF * 2 = 10CHF
* [ ] DollarとFrancの重複
* [ ] **equalsの一般化**
* [ ] timesの一般化

#### この章の振り返り
* Dollarクラスから親クラスMoneyへ段階的にメソッドを移動した
* 2つ目のクラス(Franc)も同様にサブクラス化した
* 2つ目のequalsメソッドの差異をなくして、サブクラス側の実装を削除した

#### TODO
* [ ] $5 + 10CHF = $10
* [x] $5 * 2 = $10
* [x] amountをprivateにする
* [x] Dollar sideeffect
* [ ] Moneyの丸め処理
* [x] *equals()*
* [ ] hashCode
* [ ] nullとの等価性能比較
* [ ] 他のオブジェクトとの等価性能比較
* [x] 5CHF * 2 = 10CHF
* [ ] DollarとFrancの重複
* [x] equalsの一般化
* [ ] timesの一般化

### 第7章 疑念をテストに翻訳する

#### TODO
* [ ] $5 + 10CHF = $10
* [x] $5 * 2 = $10
* [x] amountをprivateにする
* [x] Dollar sideeffect
* [ ] Moneyの丸め処理
* [x] *equals()*
* [ ] hashCode
* [ ] nullとの等価性能比較
* [ ] 他のオブジェクトとの等価性能比較
* [x] 5CHF * 2 = 10CHF
* [ ] DollarとFrancの重複
* [x] equalsの一般化
* [ ] timesの一般化
* [ ] **FrancとDollarを比較する**

#### この章の振り返り
* 頭の中にある悩みをテストとして表現した(FrancとDollarを比較したらどうなる？)
* 完璧ではないものの、まずまずのやり方(constoructor.name===constructor.name)でテストを通した
* 更なる設計は、本当に必要になる時まで先延ばしすることにした

#### TODO
* [ ] $5 + 10CHF = $10
* [x] $5 * 2 = $10
* [x] amountをprivateにする
* [x] Dollar sideeffect
* [ ] Moneyの丸め処理
* [x] *equals()*
* [ ] hashCode
* [ ] nullとの等価性能比較
* [ ] 他のオブジェクトとの等価性能比較
* [x] 5CHF * 2 = 10CHF
* [ ] DollarとFrancの重複
* [x] equalsの一般化
* [ ] timesの一般化
* [x] **FrancとDollarを比較する**

### 第8章 実装を隠す

#### TODO
* [ ] $5 + 10CHF = $10
* [x] $5 * 2 = $10
* [x] amountをprivateにする
* [x] Dollar sideeffect
* [ ] Moneyの丸め処理
* [x] *equals()*
* [ ] hashCode
* [ ] nullとの等価性能比較
* [ ] 他のオブジェクトとの等価性能比較
* [x] 5CHF * 2 = 10CHF
* [ ] **DollarとFrancの重複**
* [x] equalsの一般化
* [ ] timesの一般化
* [x] FrancとDollarを比較する

#### この章の振り返り
* 重複を除去できる状態に一歩近づけるために、DollarとFrancにある2つのtimesメソッドのシグニチャを合わせた
* せめてメソッド宣言だけは親クラスに移動した
* Factory Methodパターンを導入してテストコードから2つのクラスの存在を隠した
* サブクラスを隠した結果、いくつかのテストが冗長なものになったことに気づいたが、今はそのままにしておいた

### 第9章

#### TODO
* [ ] $5 + 10CHF = $10
* [x] $5 * 2 = $10
* [x] amountをprivateにする
* [x] Dollar sideeffect
* [ ] Moneyの丸め処理
* [x] *equals()*
* [ ] hashCode
* [ ] nullとの等価性能比較
* [ ] 他のオブジェクトとの等価性能比較
* [x] 5CHF * 2 = 10CHF
* [ ] DollarとFrancの重複
* [x] equalsの一般化
* [ ] timesの一般化
* [ ] **通貨の概念**
* [x] FrancとDollarを比較する


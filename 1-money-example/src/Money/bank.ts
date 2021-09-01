import { Money, Expression } from "./money"
import { Sum } from "./sum"

export class Bank {
  reduce = (source: Expression, to: string): Money => {
    return source.reduce(to);
  }
}
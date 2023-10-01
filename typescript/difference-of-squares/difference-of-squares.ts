export class Squares {
  count:number

  constructor(count: number) {
    this.count = count
  }

  get sumOfSquares(): number {
    let naturalNumbersTotal = 0
    for (let i = 1; i <= this.count; i++) {
      naturalNumbersTotal += i ** 2
    }
    return naturalNumbersTotal
  }

  get squareOfSum(): number {
    let naturalNumbersTotal = 0
    for (let i = 1; i <= this.count; i++) {
      naturalNumbersTotal += i
    }
    return naturalNumbersTotal ** 2
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}

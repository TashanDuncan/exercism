export class Triangle {
  side1: number;
  side2: number;
  side3: number;

  constructor(...sides: number[]) {
    this.side1 = sides[0];
    this.side2 = sides[1];
    this.side3 = sides[2];
  }

  get isEquality(): boolean {
    if (
      this.side1 + this.side2 >= this.side3 &&
      this.side1 + this.side3 >= this.side2 &&
      this.side2 + this.side3 >= this.side1
    ) {
      return true;
    } else {
      return false;
    }
  }
  get zeroCheck(): boolean {
    return this.side1 === 0 || this.side2 === 0 || this.side3 === 0
      ? true
      : false;
  }

  get isEquilateral(): boolean {
    if (this.zeroCheck) {
      return false;
    } else {
      return this.side1 === this.side2 && this.side1 === this.side3
        ? true
        : false;
    }
  }

  get isIsosceles(): boolean {
    if (this.isEquilateral) {
      return true;
    } else if (!this.isEquality) {
      return false;
    } else if (this.side1 === this.side2 && this.side1 !== this.side3) {
      return true;
    } else if (this.side1 === this.side3 && this.side1 !== this.side2) {
      return true;
    } else if (this.side2 === this.side3 && this.side2 !== this.side1) {
      return true;
    } else {
      return false;
    }
  }

  get isScalene(): boolean {
    if (this.zeroCheck || !this.isEquality) {
      return false;
    } else {
      return this.side1 !== this.side2 && this.side1 !== this.side3
        ? true
        : false;
    }
  }
}

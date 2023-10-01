export class Matrix {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  get rows(): number[][] {
    const result: string[][] = [];
    console.log(this.input.split(/\r?\n/))
    
    this.input.split(/\r?\n/).forEach((row) => result.push(row.split(" ")));
    console.log(result)
    const resultToNumber = result.map((row) => row.map((num) => parseInt(num)));

    return resultToNumber;
  }

  get columns(): number[][] {
    const rowLength = this.rows.length;
    console.log(rowLength ** 2);
    const result: string[][] = [];
    this.input.split(/\r?\n/).forEach((row) => result.push(row.split(" ")));
    
    for (let index = 0; index < rowLength; index++) {
      for (let j = 0; j < rowLength; j++) {
        console.log(result[j][index])
      }
      
    }

    const resultToNumber = result.map((row) => row.map((num) => parseInt(num)));

    return resultToNumber;
  }
}

const test = new Matrix
class Row {
  values: number[]

  constructor(values: number[]) {
    this.values = values
  }

  public getValues(): number[]{
  return this.values
  }
}

class Column {
  values: number[]

  constructor(values: number[]) {
    this.values = values
  }

  public getValues(): number[]{
  return this.values
  }

}
export class Matrix {
  input: string;
  theRows: Row[]
  theColumns: Column[]
  constructor(input: string) {
    this.input = input;
    this.theRows = Matrix.buildRows(input)
    this.theColumns = Matrix.buildColumns(this.theRows)
  }


  static buildRows(input: string): Row[] {
    return input.split(/\r?\n/)
      .map((row) => new Row(row.split(' ').map((num) => parseInt(num))))

  }
  
  static buildColumns(rows: Row[]): Column[] {
    const rowLength = rows[0].values.length
    const result: Column[] = []
    
    for (let index = 0; index < rowLength; index++) {
      const values: number[] = []
      rows.forEach(row => {
        values.push(row.values[index])
      })
      result.push(new Column(values))
    }
    return result
  }

  get rows(): number[][] {
    const result: number[][] = []

    this.theRows.forEach(row => {
      result.push(row.values)})
    return result
  }

  get columns(): number[][] {
    const result: number[][] = []

    this.theColumns.forEach(column => {
      result.push(column.values)})
    return result
  }
}

export function decodedResistorValue(colors: string[]): string {
  const colorsObject: Record<string, number> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };



  function ohms(num: number): string {
    let result = Number(`${colorsObject[colors[0]]}${colorsObject[colors[1]]}`)
    for (let index = 1; index <= num; index++) {
      result *= 10
    }
    if (result > 1000) {
      result /= 1000
      return `${result} kiloohms`
    } else{
      return `${result} ohms`
    }
  }

  return ohms(colorsObject[colors[2]])
}


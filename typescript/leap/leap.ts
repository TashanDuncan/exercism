export function isLeap(year: number): boolean {
  let result = true;
  if (year % 100 === 0 && year % 400 !== 0 && year % 4 === 0) {
    result = false;
  } else if (year % 2 === 0 && year % 4 !== 0) {
    result = false;
  } else if (year % 4 !== 0) {
    result = false;
  }
  return result;
}

console.log(isLeap(2015));

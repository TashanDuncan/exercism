//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let result = true;
  if (year % 100 === 0 && year % 400 !== 0 && year % 4 === 0) {
    result = false;
  } else if (year % 2 === 0 && year % 4 !== 0) {
    result = false;
  } else if (year % 4 !== 0) {
    result = false;
  }
  return result;
};

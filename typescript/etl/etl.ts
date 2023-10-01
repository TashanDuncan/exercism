export function transform(old: { [key: string]: string[] }): {
  [key: string]: number;
} {
  const result: { [key: string]: number } = {};
  Object.keys(old).forEach((key) => {
    old[key].forEach((letter) => {
      result[letter.toLowerCase()] = parseInt(key);
    });
  });
  return result;
}

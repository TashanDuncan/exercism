export function count(words: string): Map<string, number> {
  const result = new Map<string, number>();
  const wordsSplit = words
    .toLowerCase()
    .replace(/[\r\n\t]/g, " ")
    .split(" ")
    .filter((word) => {
      return word !== "" ? true : false;
    });

  wordsSplit.forEach((word) => {
    if (result.has(word)) {
      result.set(word, result.get(word) + 1);
    } else {
      result.set(word, 1);
    }
  });
  return result;
}
type Operations = "wink" | "double blink" | "close your eyes" | "jump";

export function commands(input: number): Operations[] {
  const result: Operations[] = [];
  const BIN16 = 10000;
  let toBin = parseInt((input >>> 0).toString(2));
  const isReversed = toBin % BIN16 === toBin - BIN16;
  if (isReversed) {
    toBin -= BIN16;
  }
  while (toBin > 0) {
    if (toBin - 1000 >= 0) {
      result.push("jump");
      toBin -= 1000;
    }
    if (toBin - 100 >= 0) {
      result.push("close your eyes");
      toBin -= 100;
    }
    if (toBin - 10 >= 0) {
      result.push("double blink");
      toBin -= 10;
    }
    if (toBin - 1 >= 0) {
      result.push("wink");
      toBin -= 1;
    }
  }
  if (isReversed) {
    return result;
  } else {
    return result.reverse();
  }
}

console.log(commands(31))
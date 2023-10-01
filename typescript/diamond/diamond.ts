

export function makeDiamond(character: string): string {
  const innerSpaceMap = new Map<string, number>([
    ["A", 0],
    ["B", 1],
    ["C", 3],
    ["D", 5],
    ["E", 7],
    ["F", 9],
    ["G", 11],
    ["H", 13],
    ["I", 1],
    ["J", 8],
    ["K", 5],
    ["L", 1],
    ["M", 3],
    ["N", 1],
    ["O", 1],
    ["P", 3],
    ["Q", 10],
    ["R", 1],
    ["S", 1],
    ["T", 1],
    ["U", 1],
    ["V", 4],
    ["W", 4],
    ["X", 8],
    ["Y", 4],
    ["Z", 10],
  ]);
  const totalSpacesPerLine = innerSpaceMap.get(character)! + 2
  if(character === 'A'){
    return 'A\n'
  }
}

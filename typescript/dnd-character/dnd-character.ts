export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  public static generateAbilityScore(): number {
    const rolls = [];

    for (let index = 0; index < 4; index++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }

    const sortedRolls = rolls.sort((a, b) => a - b);
    sortedRolls.shift();

    const result = sortedRolls.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);

    return result;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }
}

const christina = new DnDCharacter()
const tay = new DnDCharacter()

console.log(christina.strength.toString() + ' is Christinas  Strength')
console.log(tay.strength.toString() + ' is Tays  Strength')

if(christina.strength > tay.strength){
  console.log('Christina Beat up Tay, but this would never happen in real life')
} else if(christina.strength === tay.strength) {
  console.log('Tay and Christina draw so they have sex instead')
} else {
  console.log('Tay Wins (as expected :) )');
}
"use strict";
exports.__esModule = true;
exports.DnDCharacter = void 0;
var DnDCharacter = /** @class */ (function () {
    function DnDCharacter() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }
    DnDCharacter.generateAbilityScore = function () {
        var rolls = [];
        for (var index = 0; index < 4; index++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        var sortedRolls = rolls.sort(function (a, b) { return a - b; });
        sortedRolls.shift();
        var result = sortedRolls.reduce(function (accumulator, current) {
            return accumulator + current;
        }, 0);
        return result;
    };
    DnDCharacter.getModifierFor = function (abilityValue) {
        return Math.floor((abilityValue - 10) / 2);
    };
    return DnDCharacter;
}());
exports.DnDCharacter = DnDCharacter;
var christina = new DnDCharacter();
var tay = new DnDCharacter();
console.log(christina.strength.toString() + 'is Christinas  Strength');
if (christina.strength > tay.strength) {
    console.log('Christina Beat up Tay, but this would never happen in real life');
}
else if (christina.strength === tay.strength) {
    console.log('Tay and Christina draw so they have sex instead');
}
else {
    console.log('Tay Wins (as expected :) )');
}

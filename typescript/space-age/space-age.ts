// const ageMap = new Map<string, number>([
//   ["mercury", 0.2408467],
//   ["venus", 0.61519726],
//   ["mars", 1.8808158],
//   ["jupiter", 11.862615],
//   ["saturn", 29.447498],
//   ["uranus", 84.016846],
//   ["neptune", 164.79132],
// ]);

import { getPackedSettings } from "http2"

// function fixToTwo(number: number): number {
//   return Number(number.toFixed(2));
// }

// class Planet {
//   name: string;
//   seconds: number;
//   earthAge: number;
//   planetSeconds: number | undefined;

//   constructor(name: string, seconds: number) {
//     this.name = name;
//     this.seconds = seconds;
//     this.earthAge = this.seconds / 31557600;
//     this.planetSeconds = ageMap.get(this.name);
//   }
// }

// export function age(planet: string, seconds: number): number {
  
//   const yourPlanet = new Planet(planet, seconds);

//   if (yourPlanet.planetSeconds !== undefined && planet !== "earth") {
//     const planetAge = fixToTwo(yourPlanet.earthAge / yourPlanet.planetSeconds);
//     return planetAge;
//   }
//   return fixToTwo(yourPlanet.earthAge);
// }

export abstract class UniversalEntity {
  abstract getEntityType(): string
}

export abstract class Planet extends UniversalEntity{
  abstract getName(): string
  abstract getPlanetSeconds():number
  seconds: number

  constructor(seconds: number){
    super()
    this.seconds = seconds
  }

  getEntityType(): string {
      return 'Planet'
  }
  getEarthAge(): number{
    return this.seconds / 31557600
  }

  getPlanetAge(): number{
    return Number((this.getEarthAge() / this.getPlanetSeconds()).toFixed(2))
  }
}

export class GasPlanet extends Planet {
  getName(): string {
      return 'Gas Planet'
  }
  getPlanetSeconds(): number {
      return 0
  }
  getEntityType(): string {
      return 'Gas Planet'
  }

}

export class SpacePort {
  name: string

  constructor(name: string){
    this.name = name
  }
}

export class BlackHole extends UniversalEntity {
  getEntityType(): string {
      return 'Black Hole'
  }
}

export class Mars extends Planet {
  spacePort?: SpacePort


  constructor(seconds: number, spacePort: SpacePort){
    super(seconds)
    this.spacePort = spacePort
  }

  getName(): string {
      return 'Mars'
  }
  getPlanetSeconds(): number {
      return 1.8808158
  }

}

const mars = new Mars(2129871239, new SpacePort('Hello World'))

console.log(mars.getPlanetAge())
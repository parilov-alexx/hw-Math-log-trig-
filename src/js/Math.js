import Character from './character';

export default class MathCharacter extends Character {
  constructor(name) {
    super(name);
    this.distance = 1;
    this.stoned = false;
    this.attack = 10;
  }

  getAttack() {
    if (this.distance === 0) return;

    this.attack -= (this.attack * (10 / 100) * (this.distance - 1));
    if (this.stoned === true) {
      this.attack = Math.round(this.attack - (Math.log2(this.distance) * 5));
    }
    if (this.attack < 0) this.attack = 0;
  }

  setAttack(value) {
    this.attack = value;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(value) {
    this.stoned = value;
  }
}

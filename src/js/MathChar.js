import Character from './Character';

export default class MathChar extends Character {
  set stoned(value) {
    this.newStoned = value;
  }

  get stoned() {
    return this.newStoned;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get attack() {
    let sumAttack;

    if (this.stoned) {
      sumAttack = Math.round((this.baseAttack * (1.1 - this.dist / 10))
      - (Math.log2(this.dist) * 5));
    } else {
      sumAttack = Math.round(this.baseAttack * (1.1 - this.dist / 10));
    }
    if (sumAttack < 0) {
      return 0;
    }
    return sumAttack;
  }
}

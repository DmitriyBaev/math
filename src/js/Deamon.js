import MathChar from './MathChar';

export default class Deamon extends MathChar {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

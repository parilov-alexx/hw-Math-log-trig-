import MathCharacter from './Math';

export default class Daemon extends MathCharacter {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}

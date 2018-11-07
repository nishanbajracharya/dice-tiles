class Dice {
  constructor(index = 0) {
    this.value = null;
    this.index = index;

    this.element = document.createElement('div');
    this.element.classList.add('dice');

    this.roll();
  }

  setRandomPosition() {
    this.element.style.transform = `rotate(${getRandom(0, 360)}deg)`
    this.element.style.top = getRandom(100 * (this.index * 1.5 + 1), 300 * (this.index * 1.5 + 1)) + 'px';
    this.element.style.left = getRandom(100 * (this.index * 1.5 + 1), 300 * (this.index * 1.5 + 1)) + 'px';
  }

  roll() {
    this.value = getRandom(1, 6);
    this.element.setAttribute('class', 'dice');
    this.element.classList.add(`dice-${this.value}`);

    this.setRandomPosition();

    return this.value;
  }
}

class Die {
  constructor(count = 1) {
    this.die = [];
    this.values = [];
    this.rollFunctions = [];

    this.setDiceCount(count);
  }

  setDiceCount(count) {
    this.die = [];
    this.values = [];

    for (let i = 0; i < count; i++) {
      const dice = new Dice(i);

      this.die.push(dice);
      this.values.push(dice.value);
    }
  }

  roll() {
    this.values = [];

    this.die.forEach(dice => {
      this.values.push(dice.roll());
    });

    this.rollFunctions.forEach(fn => fn());

    return this.values;
  }

  onRoll(fn) {
    this.rollFunctions.push(fn);
  }

  render() {
    this.die.forEach(dice => {
      elements.root.appendChild(dice.element);
    })
  }
}

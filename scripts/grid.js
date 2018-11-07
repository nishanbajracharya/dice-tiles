class Grid {
  constructor({ row, col }) {
    this.row = row;
    this.col = col;
    this.occupied = null;

    this.element = document.createElement('div');
    this.element.classList.add('grid');
    this.element.innerHTML = `${row},${col}`;
  }

  occupy(player = null) {
    this.occupied = player;
  }
}

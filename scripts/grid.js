class Grid {
  constructor({ row, col, rowSize }) {
    this.row = row;
    this.col = col;
    this.occupied = null;

    this.element = document.createElement('div');
    this.element.classList.add('grid');
    this.element.innerHTML = `${row * rowSize + col + 1}`;
  }

  occupy(player = null) {
    this.occupied = player;
  }
}

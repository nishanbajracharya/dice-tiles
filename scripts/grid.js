class Grid {
  constructor({ row, col, colSize }) {
    this.row = row;
    this.col = col;
    this.occupied = null;

    this.element = document.createElement('div');
    this.element.classList.add('grid');
    this.element.innerHTML = `${row * colSize + col + 1}`;
  }

  occupy(player = null) {
    this.occupied = player;
  }
}

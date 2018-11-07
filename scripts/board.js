class Board {
  constructor({row, col}) {
    this.rowSize = row;
    this.colSize = col;

    this.grids = [];

    this.generateGrids();
  }

  generateGrids() {
    for (let row = 0; row < this.rowSize; row++) {
      this.grids.push([]);
      for (let col = 0; col < this.colSize; col++) {
        let grid = new Grid({ row, col });

        this.grids[row].push(grid);
      }
    }
  }

  render() {
    this.grids.forEach(row => {
      let rowDiv = document.createElement('div');
      rowDiv.classList.add('rows')
      elements.grids.appendChild(rowDiv);

      row.forEach(column => {
        rowDiv.appendChild(column.element)
      })
    })
  }
}

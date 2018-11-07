class Board {
  constructor({row, col, game}) {
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

  occupyGrids({
    rows,
    elData,
    player,
    columns,
  }) {
    let occupyAllowed = true;
    let playerAdjacent = false;

    const topNeighbour = columns.map(col => {
      const row = rows[0] - 1;
      if (row < 0) return null;

      return {
        row,
        col
      };
    });

    const bottomNeighbour = columns.map(col => {
      const row = rows[rows.length - 1] + 1;
      if (row > this.rowSize - 1) return null;

      return {
        row,
        col
      };
    });

    const leftNeighbour = rows.map(row => {
      const col = columns[0] - 1;
      if (col < 0) return null;

      return {
        row,
        col
      };
    });

    const rightNeighbour = rows.map(row => {
      const col = columns[columns.length - 1] + 1;
      if (col > this.colSize - 1) return null;

      return {
        row,
        col
      };
    });

    const neighbours = [...topNeighbour, ...bottomNeighbour, ...leftNeighbour, ...rightNeighbour].filter(e => e);
    neighbours.forEach(grid => {
      const row = grid.row;
      const col = grid.col;

      let currentGrid = this.grids.flat().find(gridVal => gridVal.row === row && gridVal.col === col);

      if (currentGrid.occupied === player) {
        playerAdjacent = true;
      }
    });

    if (player === 'player-1' && !this.grids[0][0].occupied && rows[0] === 0 && columns[0] === 0) {
      playerAdjacent = true;
    }

    if (player === 'player-2' && !this.grids[this.rowSize - 1][this.colSize - 1].occupied && rows[rows.length - 1] === (this.rowSize - 1) && columns[columns.length - 1] === (this.colSize - 1)) {
      playerAdjacent = true;
    }

    const currentGrids = [];

    const gridData = rows.map(row => columns.map(col => ({row, col}))).flat();

    gridData.forEach(grid => {
      let row = grid.row;
      let col = grid.col;

      let currentGrid = this.grids.flat().find(gridVal => gridVal.row === row && gridVal.col === col);

      currentGrids.push(currentGrid);

      if (currentGrid.occupied) {
        occupyAllowed = false;
      }
    });

    if (occupyAllowed && playerAdjacent) {
      const occupiedEl = document.createElement('div');
      occupiedEl.setAttribute('class', `occupied-div ${player}`);
      occupiedEl.style.top = (elData.top * (GRID_CELL_SIZE - 1)) + 'px';
      occupiedEl.style.left = (elData.left * (GRID_CELL_SIZE - 1) - 1) + 'px';
      occupiedEl.style.width = (elData.width * (GRID_CELL_SIZE - 1) + 1) + 'px';
      occupiedEl.style.height = (elData.height * (GRID_CELL_SIZE - 1) + 1) + 'px';

      elements.root.appendChild(occupiedEl);

      currentGrids.forEach(grid => grid.occupy(player));
    }

    return occupyAllowed && playerAdjacent;
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

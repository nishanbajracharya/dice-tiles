const injectStyles = () => {
  const style = document.createElement('style');

  style.innerHTML = `
  .grid {
    width: ${GRID_CELL_SIZE}px;
    height: ${GRID_CELL_SIZE}px;
  }
  .dice {
    width: ${DICE_SIZE}px;
    height: ${DICE_SIZE}px;
  }
  #app {
    width: ${(GRID_CELL_SIZE - 1) * COLUMNS}px;
  }
  `;

  document.body.appendChild(style);
}

injectStyles();

class Game {
  constructor() {
    this.player = '';

    this.row = ROWS;
    this.col = COLUMNS

    this.board = new Board({ row: this.row, col: this.col });

    this.die = new Die({ count: 2 });

    this.mouse = new Mouse({
      game: this
    });

    this.setPlayer('player-1');

    this.die.onRoll(() => {
      this.mouse.setElemPosition();
      this.mouse.setElemDimensions();

      this.setPlayer(`player-${this.player === 'player-1' ? 2 : 1}`)
    });
  }

  setPlayer(player) {
    this.player = player;

    this.mouse.setClassName(player);
  }

  nextTurn() {
    this.die.roll();
  }

  render() {
    this.board.render();
    this.die.render();
  }
}

const game = new Game();
game.render();

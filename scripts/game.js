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
    width: ${GRID_CELL_SIZE * COLUMNS}px;
  }
  `;

  document.body.appendChild(style);
}

injectStyles();

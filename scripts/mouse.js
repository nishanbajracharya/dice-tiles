class Mouse {
  constructor({ game }) {
    this.game = game;

    this.elTop = 0;
    this.elLeft = 0;
    this.elRight = 0;
    this.elWidth = 0;
    this.elRottom = 0;
    this.elHeight = 0;

    this.element = document.createElement('div');
    this.setClassName('');

    elements.root.appendChild(this.element);
    elements.root.addEventListener('mousemove', e => this.mouseMoveHandler(e));
  }

  mouseMoveHandler(e) {
    const mouseX = e.clientY - elements.root.offsetTop;
    const mouseY = e.clientX - elements.root.offsetLeft;

    const gridX = Math.floor(mouseX / (GRID_CELL_SIZE - 1));
    const gridY = Math.floor(mouseY / (GRID_CELL_SIZE - 1));

    this.elLeft = gridY;
    this.elTop = gridX;

    this.elWidth = this.game.die.values[0];
    this.elHeight = this.game.die.values[1];

    this.elRight = this.elLeft + this.elWidth - 1;
    this.elBottom = this.elTop + this.elHeight - 1;

    if (this.elLeft < 0) {
      this.elLeft = 0;
      this.elRight = this.elWidth - 1;
    }

    if (this.elTop < 0) {
      this.elTop = 0;
      this.elBottom = this.elHeight - 1;
    }

    if (this.elRight >= this.game.col - 1) {
      this.elRight = this.game.col - 1;
      this.elLeft = this.game.col - this.elWidth;
    }

    if (this.elBottom >= this.game.row - 1) {
      this.elBottom = this.game.row - 1;
      this.elTop = this.game.row - this.elHeight;
    }

    this.setElemDimensions();
    this.setElemPosition();
  }

  setElemDimensions() {
    const elWidth = this.elWidth * (GRID_CELL_SIZE - 1) - 1;
    const elHeight = this.elHeight * (GRID_CELL_SIZE - 1) - 1;

    this.element.style.width = `${elWidth}px`;
    this.element.style.height = `${elHeight}px`;
  }

  setElemPosition() {
    const elLeft = this.elLeft * (GRID_CELL_SIZE - 1);
    const elTop = this.elTop * (GRID_CELL_SIZE - 1);

    this.element.style.top = `${elTop}px`;
    this.element.style.left = `${elLeft}px`;
  }

  setClassName(className) {
    this.element.setAttribute('class', 'mouse-el');

    className && this.element.classList.add(className);
  }
}

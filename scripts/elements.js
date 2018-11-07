const elements = {
  root: document.getElementById('app'),
  dice: document.getElementById('dice'),
  grids: document.getElementById('grids'),
  red: document.getElementById('red-score'),
  blue: document.getElementById('blue-score'),
  occupied: document.getElementById('occupied'),
};

function clearElement(el) {
  el.innerHTML = '';
}

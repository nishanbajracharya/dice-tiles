function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function range(step = 1) {
  return function (start, end) {
    const len = Math.floor((end - start) / step) + 1;
    return Array(len).fill().map((_, idx) => start + (idx * step));
  }
}

const getRange = range();

 wordCount = (grid, name) => {
  let count = 0;

  const resetPointersAddCount = () => {
    count++;
    wordPointer = 0;
    xPointer = 0;
    yPointer = 0;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (name[0] === grid[i][j]) {
        if (i - name.length >= -1) {
          // SI LA PALABRA ENTRA PARA ARRIBA
          let wordPointer = 0;
          let xPointer = 0;
          let yPointer = 0;
          while (wordPointer < name.length) {
            if (name[wordPointer] !== grid[i - yPointer][j + xPointer]) break;
            wordPointer++;
            yPointer++;
          }
          if (wordPointer === name.length) {
            resetPointersAddCount();
          }
        }
        if (i - name.length >= -1 && j - name.length >= -1) {
          // SI LA PALABRA ENTRA PARA ARRIBA Y LA IZQUIERDA
          let wordPointer = 0;
          let xPointer = 0;
          let yPointer = 0;
          while (wordPointer < name.length) {
            if (name[wordPointer] !== grid[i - yPointer][j - xPointer]) break;
            wordPointer++;
            yPointer++;
            xPointer++;
          }
          if (wordPointer === name.length) {
            resetPointersAddCount();
          }
        }
        if (i - name.length >= -1 && j + name.length <= grid[i].length) {
          // SI LA PALABRA ENTRA PARA ARRIBA Y LA DERECHA
          let wordPointer = 0;
          let xPointer = 0;
          let yPointer = 0;
          while (wordPointer < name.length) {
            if (name[wordPointer] !== grid[i - yPointer][j + xPointer]) break;
            wordPointer++;
            yPointer++;
            xPointer++;
          }
          if (wordPointer === name.length) {
            resetPointersAddCount();
          }
        }
        if (i + name.length <= grid.length) {
          // SI LA PALABRA ENTRA PARA ABAJO
          let wordPointer = 0;
          let xPointer = 0;
          let yPointer = 0;
          while (wordPointer < name.length) {
            if (name[wordPointer] !== grid[i + yPointer][j]) break;
            wordPointer++;
            yPointer++;
          }
          if (wordPointer === name.length) {
            resetPointersAddCount();
          }
        }
        if (i + name.length <= grid.length && j - name.length >= -1) {
          // SI LA PALABRA ENTRA PARA ABAJO Y LA IZQUIERDA
          let wordPointer = 0;
          let xPointer = 0;
          let yPointer = 0;
          while (wordPointer < name.length) {
            if (name[wordPointer] !== grid[i + yPointer][j - xPointer]) break;
            wordPointer++;
            yPointer++;
            xPointer++;
          }
          if (wordPointer === name.length) {
            resetPointersAddCount();
          }
        }
        if (
          i + name.length <= grid.length &&
          j + name.length <= grid[i].length
        ) {
          // SI LA PALABRA ENTRA PARA ABAJO Y LA DERECHA
          let wordPointer = 0;
          let xPointer = 0;
          let yPointer = 0;
          while (wordPointer < name.length) {
            if (name[wordPointer] !== grid[i + yPointer][j + xPointer]) break;
            wordPointer++;
            yPointer++;
            xPointer++;
          }
          if (wordPointer === name.length) {
            resetPointersAddCount();
          }
        }
        if (j + name.length <= grid[i].length) {
          // SI LA PALABRA ENTRA PARA LA DERECHA
          let wordPointer = 0;
          let xPointer = 0;
          let yPointer = 0;
          while (wordPointer < name.length) {
            if (name[wordPointer] !== grid[i + yPointer][j + xPointer]) break;
            wordPointer++;
            xPointer++;
          }
          if (wordPointer === name.length) {
            // count++
            // let yPointer = 0
            resetPointersAddCount();
          }
        }
        if (j - name.length >= -1) {
          // SI LA PALABRA ENTRA PARA LA IZQUIERDA
          let wordPointer = 0;
          let xPointer = 0;
          let yPointer = 0;
          while (wordPointer < name.length) {
            if (name[wordPointer] !== grid[i + yPointer][j - xPointer]) break;
            wordPointer++;
            xPointer++;
          }
          if (wordPointer === name.length) {
            resetPointersAddCount();
          }
        }
      }
    }
  }
  return count;
};

module.exports = wordCount
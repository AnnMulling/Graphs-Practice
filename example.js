/*
    PLEASE NOTE THESE ARE NOT EXACT FOR ANY SPECIFIC PROBLEM.
    THESE ARE TO HELP GUIDE YOU, NOT GIVE DIRECT ANSWERS TO ANYTHING.
*/

// const matrix1 = [ [ 0, 1, 0, 0, 1 ], [ 1, 1, 1, 0, 1 ], [ 0, 1, 0, 1, 1 ], [ 0, 0, 0, 1, 1 ], [ 0, 0, 0, 1, 0 ] ];

const matrix = [
    [0, 1, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
  ];

  // const littleMatrix = [
  //   [1,2],
  //   [1,2]
  // ]
  // const matrix2 = [
  //   [0, 1, 0, 0, 1],
  //   [1, 2, 1, 0, 1],
  //   [0, 1, 6, 1, 0],
  //   [0, 0, 0, 1, 1],
  //   [0, 3, 0, 1, 0],
  // ];

  // const row = 3
  // const col = 2

  // console.log(matrix[row-1][col+1])
  // console.log(matrix[row][col-1])



  function findNeighbors(row, col, matrix) {
    const neighbors = [];
    // up
    if (row > 0 && matrix[row-1][col] === 1) {
      neighbors.push([row-1, col])
    }

    // down
    if (row < matrix.length - 1 && matrix[row+1][col] === 1) {
      neighbors.push([row+1, col]);
    }

    // left
    if (col > 0 && matrix[row][col-1] === 1) {
      neighbors.push([row, col-1]);
    }

    // right
    if (col < matrix[0].length - 1 && matrix[row][col + 1] === 1) {
      neighbors.push([row, col + 1]);
    }

    return neighbors;
  }

  // console.log(findNeighbors(1, 1, matrix))

  function localTraversal(node, matrix, visited) {

    const queue = [node];
    visited.add(node.toString());

    while (queue.length) {
      const [row, col] = queue.shift();

      const neighbors = findNeighbors(row, col, matrix);
      // console.log(neighbors)
      if (neighbors.length === 4) return true;

      neighbors.forEach(neighbor => {
        if (!visited.has(neighbor.toString())) {
          queue.push(neighbor);
          visited.add(neighbor.toString());
        }
      });
    }
    return false;
  }

  // console.log(localTraversal([1,1], matrix, new Set()));
  // console.log(localTraversal([3,3], matrix, new Set()));

  function driver(matrix) {
    const visited = new Set()
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === 1) {
          if (localTraversal([row,col], matrix, visited)) {
            return console.log('We have found an intersection!!!')
          }
        }
      }
    }
    return console.log('No intersection!')
  }

  driver(matrix)

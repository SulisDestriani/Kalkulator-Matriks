function calculate() {
    var matrixA = parseMatrix(document.getElementById('matrixA').value);
    var matrixB = parseMatrix(document.getElementById('matrixB').value);
    
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
      document.getElementById('result').innerHTML = 'Both matrices must have the same dimensions.';
      return;
    }
    
    var resultMatrix = [];
    for (var i = 0; i < matrixA.length; i++) {
      var row = [];
      for (var j = 0; j < matrixA[0].length; j++) {
        row.push(matrixA[i][j] + matrixB[i][j]);
      }
      resultMatrix.push(row);
    }
    
    document.getElementById('result').innerHTML = 'Result: <br>' + formatMatrix(resultMatrix);
  }
  
  function parseMatrix(input) {
    var rows = input.trim().split('\n');
    var matrix = [];
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i].trim().split(/\s+/).map(Number);
      matrix.push(row);
    }
    return matrix;
  }
  
  function formatMatrix(matrix) {
    var result = '';
    for (var i = 0; i < matrix.length; i++) {
      result += matrix[i].join(' ') + '<br>';
    }
    return result;
  }
  
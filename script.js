function add() {
  performOperation((a, b) => a + b, "Addition");
}

function subtract() {
  performOperation((a, b) => a - b, "Subtraction");
}

function multiply() {
  performOperation((a, b) => a * b, "Multiplication");
}

function scalarMultiply() {
  var scalar = parseFloat(prompt("Enter the scalar value:"));
  if (isNaN(scalar)) {
    alert("Please enter a valid scalar value.");
    return;
  }
  
  var matrixA = parseMatrix(document.getElementById('matrixA').value);
  
  var resultMatrix = [];
  for (var i = 0; i < matrixA.length; i++) {
    var row = [];
    for (var j = 0; j < matrixA[0].length; j++) {
      row.push(matrixA[i][j] * scalar);
    }
    resultMatrix.push(row);
  }
  
  document.getElementById('result').innerHTML = `Scalar Multiplication Result (Scalar: ${scalar}): <br>` + formatMatrix(resultMatrix);
}

function performOperation(operation, operationName) {
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
      row.push(operation(matrixA[i][j], matrixB[i][j]));
    }
    resultMatrix.push(row);
  }
  
  document.getElementById('result').innerHTML = `${operationName} Result: <br>` + formatMatrix(resultMatrix);
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

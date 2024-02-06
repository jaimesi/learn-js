// Function to deep copy an array
function deepCopy(arr) {
    return arr.map(item => Array.isArray(item) ? deepCopy(item) : item);
}

// Original matrix (list of lists)
const originalMatrix = [
    [3, 2, 1],
    [4, 5, 6],
    [7, 9, 8]
  ];

  // Creating a deep copy of the original matrix
  const newMatrix = deepCopy(originalMatrix).map(row => row.sort());

// Modifying the original matrix (changing the last element of the first row)
  originalMatrix[0][2] = 99;
  
  // Displaying the original and new matrices
  console.log('Original Matrix (modified):', originalMatrix);
  console.log('New Matrix (unaffected):', newMatrix);
  
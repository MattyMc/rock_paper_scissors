// data will represent patterns
//  each element will be of length 5:
//  first element is the label
//  second element was the previous outcome
//  third element was the two outcomes ago
data = [];

// Pattern where all guesses are the same:
for (var i = 0; i++; i < 4) {
  data.push([i, i, i, i, i]);
}
// alternating pattern (rock -> scissors -> rock ....)
//  length 2
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    // make sure it's not the same digit repeating
    if (i !== j) {
      data.push([i, j, i, j, i]);
    }
  }
}

// alternating pattern of length 3 (rock -> scissors -> scissors -> rock ...)
//  length 3
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    for (var k = 0; k < 4; k++) {
      // make sure it's not the same digit repeating
      if (i !== j && i !== k && j !== k) {
        data.push([i, j, k, i, j]);
      }
    }
  }
}

// print out the dataset
data.map(function(el) {
  console.log(el[0] + ".0 " + el[1] + ".0 " + el[2] + ".0 " + el[3] + ".0 " + el[4] + ".0")
});


// DATA:





// should I do a length 4?

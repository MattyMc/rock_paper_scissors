// data will represent patterns
//  each element will be of length 5:
//  first element is the label
//  second element was the previous outcome
//  third element was the two outcomes ago
data = [];

// Pattern where all guesses are the same:
for (var i = 0; i++; i < 3) {
  data.push([i, i, i, i, i, i]);
}
// alternating pattern (rock -> scissors -> rock ....)
//  length 2
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // make sure we don't already have this pattern
    if (data.indexOf([i,j,i,j,i,j]) === -1) {
      data.push([i, j, i, j, i, j]);
    }
  }
}

// alternating pattern of length 3 (rock -> scissors -> scissors -> rock ...)
//  length 3
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    for (var k = 0; k < 3; k++) {
      // make sure it's not the same digit repeating
      if (data.indexOf([i,j,k,i,j,k]) === -1) {
        data.push([i, j, k, i, j, k]);
      }
    }
  }
}

// print out the dataset
console.log("label,prior_1,prior_2,prior_3,prior_4,prior_5")
data.map(function(el) {
  console.log(el[0] + ".0," + el[1] + ".0," + el[2] + ".0," + el[3] + ".0," + el[4] + ".0," + el[5] + ".0")
});


// DATA:





// should I do a length 4?

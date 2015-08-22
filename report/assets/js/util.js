function github_data_convert(table) {
  var i, j, total;
  for (i = 1; i < table.length; ++i){
    total = 0;
    for (j = 1; j < table[i].length; ++j){
      total += table[i][j];
    }
    for (j = 1; j < table[i].length; ++j){
      table[i][j] /= total;
    }
  }
}

function pypl_data_convert(table) {
    var i;
    for (i = 0; i < table[0].length; ++i){
        table[0][i] = table[0][i].toLowerCase();
    }
}

function merge(arr1, arr2) {
    var res = arr1.slice();
    arr2.forEach(function (x) {
        if(res.every(function(y) { return y !== x; })){
            res.push(x);
        }
    });
    return res;
}
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
    

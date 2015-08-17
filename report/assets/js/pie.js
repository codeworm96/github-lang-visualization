function Pie(cur, table, width, height) {
  function zip(lang, share) {
    var res = [];
    for (var i = 0; i < lang.length; ++i){
      res.push({
        language: lang[i],
        share: share[i]
      });
    }
    return res;
  }
  this.data = {};
  for (var i = 1; i < table.length; ++i){
    this.data[table[i][0]] = zip(table[0].slice(1), table[i].slice(1));
  }
  var radius = Math.min(width, height) / 2;
  var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  var pie = d3.layout.pie()
    .value(function(d) { return d.share; });

  this.node = cur.append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  var g = this.node.selectAll('.arc')
    .data(pie(this.data[table[1][0]]))
    .enter()
    .append('g')
    .attr('class', 'arc');

  g.append('path')
      .attr('d', arc)
      .style('fill', function(d) { return color(d.data.language); })
      .each(function(d) {
        this._current = d;
      });
  g.append('text')
    .attr('transform', function (d) { return 'translate(' + arc.centroid(d) + ')'; })
    .style('text-anchor', 'middle');
  
  g.on('mousemove', function (d) {
    d3.select('.tooltip')
      .text(d.data.language + ': ' + (d.data.share * 100).toFixed(2) + '%')
      .style('left', (d3.event.pageX + 15) + 'px')
      .style('top', (d3.event.pageY + 15) + 'px')
      .style('display', 'block');
  })
  .on('mouseleave', function (d) {
    d3.select('.tooltip')
      .style('display', 'none');
  });

  this.render = function (date) {
    this.node.selectAll('.arc')
      .data(pie(this.data[date]))
      .select('g path')
      .transition()
      .attrTween('d', function (d) {
        var interpolate = d3.interpolate(this._current, d);
        var _this = this;
        return function(t) {
          _this._current = interpolate(t);
          return arc(_this._current);
        };

      });
  }
}

function create_timeline(node, dates, charts) {
  var focus = function (d) {
    items.each(function (data) {
      if (data === d){
        d3.select(this)
          .style('background-color', 'steelblue');
      }else{
        d3.select(this)
          .style('background-color', 'grey');
      }
    });

    charts.forEach(function(chart) {
      chart.render(d);
    });
  };

  var items = node.selectAll('li')
    .data(dates)
    .enter()
    .append('li')
    .text(function (d) { return d.substr(0, 7); })
    .on('mouseover', focus);

  focus(dates[dates.length - 1]);
}


      





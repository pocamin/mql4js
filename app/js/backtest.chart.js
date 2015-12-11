var backtestChart = function () {
  var initialLinesToDisplay = 0;
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var parseDate = d3.time.format("%d-%b-%y").parse;

  var x = techan.scale.financetime()
    .range([0, width]);

  var y = d3.scale.linear()
    .range([height, 0]);

  var ohlc = techan.plot.ohlc()
    .xScale(x)
    .yScale(y);


  var tradearrow = techan.plot.tradearrow()
    .xScale(x)
    .yScale(y)
    .y(function (d) {
      return height;
    }).on('mouseenter', function (order) {
      $("tr[data-order-id=" + order.id + "]").addClass("highlight");
    }).on('mouseout', function (order) {
      $("tr[data-order-id=" + order.id + "]").removeClass("highlight");
    });


  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  var svg = d3.select("#graph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  var defs = svg.append("defs");

  defs.append("clipPath")
    .attr("id", "ohlcClip")
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", width)
    .attr("height", height);

  svg = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var ohlcSelection = svg.append("g")
    .attr("class", "ohlc")
    .attr("transform", "translate(0,0)");

  ohlcSelection.append("g")
    .attr("class", "volume")
    .attr("clip-path", "url(#ohlcClip)");

  ohlcSelection.append("g")
    .attr("class", "candlestick")
    .attr("clip-path", "url(#ohlcClip)");


  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")");

  svg.append("g")
    .attr("class", "y axis");

  svg.append("g")
    .attr("class", "volume axis");
  svg.append("div").style({"width": "50px", "background-color": "red"});

  var indicators = [];
  var addToIndicators = function (id, color, indicatorFunction) {
    var indicator = {
      indicator: indicatorFunction,
      id: id,
      color: color,
      graph: techan.plot.sma().xScale(x).yScale(y)
    };


    ohlcSelection.append("g")
      .attr("class", "legend " + indicator.id)
      .style("fill", indicator.color)
      .append("text")
      .attr("x", (width - 100 ) + "px")
      .attr("y", indicators.length * 20 + "px")
      .text(indicator.id);

    ohlcSelection.append("g")
      .attr("id", indicator.id)
      .style("stroke", indicator.color)
      .attr("class", "indicator " + indicator.id)
      .attr("clip-path", "url(#ohlcClip)");

    indicators.push(indicator);
  };


  var redraw = function (data, newTicksSinceLastTime, trades) {


    var accessor = ohlc.accessor();

    initialLinesToDisplay += newTicksSinceLastTime;
    data = data.slice(data.length > initialLinesToDisplay ? data.length - initialLinesToDisplay : 0);

    svg.select("g.candlestick").datum(data);
    x.domain(data.map(accessor.d));
    y.domain(techan.scale.plot.ohlc(data).domain());


    svg.select('g.x.axis').call(xAxis);
    svg.select('g.y.axis').call(yAxis);
    svg.select("g.candlestick").call(ohlc);


    // update indicator graphs
    indicators.forEach(function (indicator) {

      var indicatorData = indicator.indicator.values;
      var selection = svg.select("#" + indicator.id);
      selection.datum(indicatorData);

      refreshIndicator(selection,
        indicator.graph,
        indicatorData
      );
    });


    if (trades.length > 0) {
      svg.select("g.tradearrow").remove();
      var arrows = svg.append("g")
        .attr("class", "tradearrow")
        .attr("clip-path", "url(#ohlcClip)")
        .datum(trades)
        .call(tradearrow);


    }


  };


  function refreshIndicator(selection, indicator, data) {
    var datum = selection.datum();
    // Some trickery to remove old and insert new without changing array reference,
    // so no need to update __data__ in the DOM
    datum.splice.apply(datum, [0, datum.length].concat(data));
    selection.call(indicator);
  }


  return {redraw: redraw, addToIndicators: addToIndicators}
};






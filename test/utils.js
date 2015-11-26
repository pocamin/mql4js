var Smoothie = {'requirePath': ['/base/dist/']};

var simplifyTimeSeries = function (data) {
  return data.map(function (value) {
    return [moment(value.date).format("YYYYMMDD"), value.close]
  })
};
// Karma configuration
// Generated on Thu Nov 05 2015 09:21:20 GMT+0100 (CET)
module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],

    frameworks: ['jasmine'],
    files: [
      'test/requireAdapter.js',
      'dist/js/require.js',
      'app/js/agentExecutionEngine.js',
      'app/js/mql4.js',
      'dist/js/mql4-to-js.js',
      'dist/bower_dep.js',
      'test/mql4js/convert.common.js',
      'test/mql4js/convert.common.js',
      'test/**/*.js',
      {pattern: 'dist/antlr4/**/*.js', included: false, served: true, nocache: true},
      {pattern: 'dist/js/MQL4Lexer.js', included: false, served: true, nocache: true},
      {pattern: 'dist/js/MQL4Parser.js', included: false, served: true, nocache: true}

    ],

    preprocessors: {
      'app/js/mql4.adaptor.js': ['coverage'],
      'app/js/mql4.js': ['coverage'],
      'app/js/mql4-to-js.js': ['coverage']
    }

  })
};

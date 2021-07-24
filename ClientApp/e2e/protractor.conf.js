// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const ***REMOVED*** SpecReporter ***REMOVED*** = require("jasmine-spec-reporter");

exports.config = ***REMOVED***
  allScriptsTimeout: 11000,
  specs: ["./src/**/*.e2e-spec.ts"],
  capabilities: ***REMOVED***
    browserName: "chrome"
***REMOVED***
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "jasmine",
  jasmineNodeOpts: ***REMOVED***
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() ***REMOVED******REMOVED***
***REMOVED***
  onPrepare() ***REMOVED***
    require("ts-node").register(***REMOVED***
      project: require("path").join(__dirname, "./tsconfig.e2e.json")
***REMOVED***);
    jasmine
      .getEnv()
      .addReporter(new SpecReporter(***REMOVED*** spec: ***REMOVED*** displayStacktrace: true ***REMOVED*** ***REMOVED***));
***REMOVED***
***REMOVED***;

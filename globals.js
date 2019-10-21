var HtmlReporter = require('nightwatch-html-reporter');

var reporter = new HtmlReporter({
    openBrowser: false,
    // reportsDirectory: __dirname + '/reports',
    reportsDirectory: 'tests_output',
  //  reportFilename: 'report' + '_' + process.env.__NIGHTWATCH_ENV + '.html',
  //  themeName: 'outlook'
});
const zipFolder = require('zip-a-folder');
const path = require('path');
const nodemailer = require('nodemailer');
const config  = require('./config');
const cities = [
    {
      "to": "lalit@hometown.in",
      "subject": `Test Report ${Date()}`,
      "text": "Test Report File",
      "attachments": [
        {   
          "filename": "tests_output.zip",
          "content": "Report",
          "path": path.join(__dirname, 'tests_output.zip')
        }
      ]
    }
  ];

let transporter = nodemailer.createTransport(config);
const origin = path.join(__dirname, 'tests_output');
const destination = path.join(__dirname, 'tests_output.zip');

class ZipAFolder {

  static main() {
      zipFolder.zipFolder(origin, destination, function(err) {
          if(err) {
              console.log('Something went wrong in zip folder creation !', err);
          } else {
            console.log('zip created');
              console.log('Sending mail to users ...');
              cities.forEach((id) => {
              let mailOptions = {
                  ...id,
                  from: 'lsukhwal30@gmail.com',
              };

              transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                  console.log(error);
                  } else {
                  console.log('Done ....');
                  }
              });
              });
          }
      });
  }
}
//var allure = require("nightwatch-allure-adapter");

module.exports = {

  

    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure: true,
  
    // this will overwrite the default polling interval (currently 500ms) for waitFor commands
    // and expect assertions that use retry
    waitForConditionPollInterval: 500,
  
    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout: 5000,
  
    // this will cause waitFor commands on elements to throw an error if multiple
    // elements are found using the given locate strategy and selector
    throwOnMultipleElementsReturned: false,
  
    // controls the timeout value for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout: 10000,
  
    // controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time
    // or an error is thrown
    unitTestsTimeout: 2000,
  
    // controls the timeout value for when executing the global async reporter. Expects the done() callback to be invoked within this time
    // or an error is thrown
    customReporterCallbackTimeout: 20000,
  
    // Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test.
    retryAssertionTimeout: 1000,
  
    'default' : {
      myGlobal : function() {
        return 'I\'m a method';
      }
    },
  
    'test_env' : {
      myGlobal: 'test_global',
      beforeEach : function() {
  
      }
    },
    
    before(cb) {
      //console.log('GLOBAL BEFORE')
      cb();
    },
  
    beforeEach(browser, cb) {
      //console.log('GLOBAL beforeEach')
      cb();
    },
  
    after(cb) {
      ZipAFolder.main();
      //console.log('GLOBAL AFTER')
      cb();
    },
  
    afterEach(browser, cb) {
      browser.perform(function() {
        //console.log('GLOBAL afterEach')
        cb();
      });
    },
    // reporter(results, cb) {
    //     cb();
    //   }

  //   write : function(results, options, done) {
  //     reporter.fn(results, done);
  // }
    reporter: reporter.fn
    // reporter: allure.write
  };
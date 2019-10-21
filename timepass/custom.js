const Nightwatch = require('nightwatch');
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
const settings = {"test_settings" : {

    "default" : {
  "request_timeout_options": {
      "timeout": 300000,
      "retry_attempts": 5
    },
    "desiredCapabilities": {
              "browserName": "chrome"
            },
  //"launchUrl":argv.url,

  "silent" : true,
  "screenshots" : {
      'enabled': true,
      'on_failure': true,
      'on_error': true,
      'path': 'tests_output/screenshots',
      //'path':__dirname + 'tests_output/screenshots',
  },
//   "desiredCapabilities" : {
//     "browserName" : "phantomjs",
//     "javascriptEnabled" : true,
//     "acceptSslCerts" : true,
//     "phantomjs.binary.path" : "/path/to/phantomjs",
//     "phantomjs.cli.args" : ["--ignore-ssl-errors=true"]
//   }
//
},

//   "chrome" : {
//     "desiredCapabilities": {
//       "browserName": "chrome"
//     },
//     'chromeOptions': {
//      w3c: false,
//      'args': ['--headless', "--window-size=1860,1200"],
//   }
  
// },

chrome : {
"desiredCapabilities": {
"browserName": "chrome",
"acceptSslCerts": true,
"acceptInsecureCerts": true,
"disable-popup-blocking": true,
"skip_testcases_on_fail": false,
"loggingPrefs": {
"browser": "ALL"
},
"acceptSslCerts": true,
'chromeOptions': {
w3c: false,
"args": [
"disable-web-security",
"ignore-certificate-errors",
"--test-type",
"--disable-gpu",
"--window-size=1860,1200",
"--headless",
// "--screenshot",
// "--dump-dom"
],
},
}
}


}}

class ZipAFolder {

    static main() {
        zipFolder.zipFolder(origin, destination, function(err) {
            if(err) {
                console.log('Something went wrong in zip folder creation !', err);
            } else {
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
// read the CLI arguments
Nightwatch.cli(function(argv) {
  argv.source = argv.length ? argv[''].slice(0) : '';

  // create the Nightwatch CLI runner
  const runner = Nightwatch.CliRunner(argv);

  // setup and run tests
  runner
    .setup()
    .startWebDriver()
    .then(() => runner.runTests('/tests', settings))
    .then((abc) => {
        console.log('ok');
        console.log(abc);
        ZipAFolder.main();
        runner.stopWebDriver()
    })
    .catch(err => console.error(err));
});
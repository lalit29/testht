module.exports={
    "src_folders" : ["tests"],

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    //"server_path": "./bin/geckodriver-0.23",
    "port": 9515
  },

  "globals_path": 'globals.js',
      "test_workers": {
        "enabled": true,
        "workers": 3,
      },
  "test_settings" : {

        "default" : {
      "request_timeout_options": {
          "timeout": 300000,
          "retry_attempts": 5
        },

      //"launchUrl":argv.url,

      "silent" : true,
      "screenshots" : {
          'enabled': true,
          'on_failure': true,
          'on_error': true,
          'path': 'tests_output/screenshots'
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

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      },
      'chromeOptions': {
        'args': ['--headless']
    }
      
  },
  
   }
}
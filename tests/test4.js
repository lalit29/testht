module.exports = {
    '@tags': ['s2'],
    '@disabled': false,
    'SignUp Test'(browser) {
        console.log(browser.options.desiredCapabilities.browserName);
        browser
            .useXpath()
            .url('https://www.hometown.in')
            .windowMaximize()
           // .click('@profileButton')
            .click('//*[@id="content"]/div/main/section/div/section/div[1]/div/div/div[3]/button[3]/img')
            .pause(1000)
            .click('//*[@id="content"]/div/main/section/div/section/div[1]/div/div/div[3]/div/div[2]/div/div[1]/a')
            .pause(1000)
            //.click('//*[@id="content"]/div/main/section/div/div[1]/div/div/div/div/div[2]/div/div[2]/div/div/form/div[1]/input')
            .setValue('//*[@id="content"]/div/main/section/div/div[1]/div/div/div/div[2]/div[2]/div/div[2]/div/form/div[1]/input','abced')
            .pause(1000)
            .setValue('//*[@id="content"]/div/main/section/div/div[1]/div/div/div/div/div[2]/div/div[2]/div/div/form/div[2]/div/div/input','1234')
            .pause(1000)
            .end();
    }
  };
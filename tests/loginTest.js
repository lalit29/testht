module.exports = {
    '@tags': ['login'],
    '@disabled': false,
    'Login Test'(browser) {
        console.log(browser.options.desiredCapabilities.browserName);
        browser
            .useXpath()
           .url('https://www.hometown.in/login/?redirect=/')
           .windowMaximize()
            .setValue('//*[@id="content"]/div/main/section/div/div[1]/div/div/div/div/div[2]/div/div[2]/div/div/form/div[1]/input', 'lalit@hometown.in')
            .pause(1000)
            .setValue('//*[@id="content"]/div/main/section/div/div[1]/div/div/div/div/div[2]/div/div[2]/div/div/form/div[2]/div/div/input','12345fgff6')
            .click('//*[@id="content"]/div/main/section/div/div[1]/div/div/div/div/div[2]/div/div[2]/div/div/form/div[3]/div[2]/button')
            .pause(1000)
            .url('https://www.hometown.in/profile')
            .pause(1000)
            .waitForElementVisible('//*[@id="content"]/div/main/div[2]/div/section[2]/div/div[2]/div/div[1]/a')
            .end();
    }
};
module.exports = {
    '@tags': ['gmail'],
    '@disabled': false,
    'Login Test'(browser) {
        console.log(browser.options.desiredCapabilities.browserName);
        browser
            .useXpath()
            .url('https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
           .windowMaximize()
            .setValue('//*[@id="identifierId"]', 'lsukhwal30@gmail.com')
            .pause(1000)
            .click('//*[@id="identifierNext"]/span/span')
            .paue(1000)
            .setValue('//*[@id="password"]/div[1]/div/div[1]/input','123R@ngo.')
            .pause(1000)
            .url('https://accounts.google.com/b/0/DisplayUnlockCaptcha')
            .pause(1000)
            .click('//*[@id="submitChallenge"]')
            // .click('//*[@id="content"]/div/main/section/div/div[1]/div/div/div/div/div[2]/div/div[2]/div/div/form/div[3]/div[2]/button')
            // .pause(1000)
            // .url('https://www.hometown.in/profile')
            // .pause(1000)
            // .waitForElementVisible('//*[@id="content"]/div/main/div[2]/div/section[2]/div/div[2]/div/div[1]/a')
            .end();
    }
};
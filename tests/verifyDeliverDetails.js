module.exports={
    '@tags': ['pincode'],
    // '@disabled': true,
    'Delivery details'(browser) {
        console.log(browser.options.desiredCapabilities.browserName);
        browser
            .useXpath()
            .url('https://www.hometown.in/furniture/living-room-furniture/sofas')
            // .windowMaximize()
            .pause(1000)
            .assert.containsText('//*[@id="content"]/div/main/section/div[1]/div/div/section[5]/div/div/div[1]/div[1]/a/div[2]/div[2]/span', "Delivered by 4th Oct")
            .click('//*[@id="content"]/div/main/section/div[1]/div/div/section[5]/div/div/div[1]/div[1]/a/div[2]/h3')
            .pause(2000)
            .moveTo(null,200,300)
            .assert.containsText('//*[@id="content"]/div/main/section/div[1]/div/div/section/div/div/div/div[2]/div[3]/section/div[2]/div','Delivered by 4th Oct')
            .setValue('//*[@id="content"]/div/main/section/div[1]/div/div/section/div/div/div/div[2]/div[3]/section/div[1]/div/div/form/input',['800005',browser.Keys.ENTER])
            .pause(3000)
            .back()
            .pause(3000)
            .refresh()
            .assert.containsText('//*[@id="content"]/div/main/section/div[1]/div/div/section[5]/div/div/div[1]/div[1]/a/div[2]/div[2]/span', "Currently, product unavailable at 800005")
            .pause(3000)
            .end();
 }
}
module.exports = {
    '@tags': ['modal'],
    '@disabled': false,
    'modal Test'(browser) {
        browser
            .useXpath()
            .url('https://www.hometown.in/furniture/living-room-furniture/sofas')
            .windowMaximize()
            .click('//*[@id="content"]/div/main/section/div[1]/section/div[1]/div/div/div[3]/button[1]/span')
            .pause(1000)
            .setValue('//input[@placeholder="Enter Pincode / City"]', ['800005', browser.Keys.ENTER]).saveScreenshot('./reports/pincodeInsideModal.png')
            //.assert.containsText('//input[@placeholder="Enter Pincode / City', "Chatni Vati Stainless steel Katori in Silver Colour by Living Essence")
            browser.pause(1000)
            //.waitForElementVisible('/html/body/div[7]/div/div/div/div/input', 3000)
            browser.end();
          //
    }
  };
  
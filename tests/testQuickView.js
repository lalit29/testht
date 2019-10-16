module.exports = {
    '@tags': ['quickview'],
    '@disabled': false,
    'QuickView Test'(browser) {
        console.log(browser.options.desiredCapabilities.browserName);
        browser
            .useXpath()
            .url('https://www.hometown.in/furniture/mattresses')
            .windowMaximize()
            .moveToElement('//*[@id="content"]/div/main/section/div[1]/div/div/section[5]/div/div/div[1]/div[1]/a/div[2]/h3',1,1)       
            browser.getText('//*[@id="content"]/div/main/section/div[1]/div/div/section[5]/div/div/div[1]/div[1]/a/div[2]/h3', function(result) {
            this.click('//*[@id="content"]/div/main/section/div[1]/div/div/section[5]/div/div/div[1]/div[1]/button[2]')
            .pause(1000)
            //this.assert.containsText('/div[13]/div/div/div/div/div[2]/div[1]/h1/a',result.value)
 
            })
            .pause(2000)
            .assert.containsText('/html/body/div[7]/div/div/div/div/div[2]/div[1]/h1/a', "Mattress Daisy PU Foam Queen Bed (78*60*4) in Maroon Colour by HomeTown")
           // .assert.containsText('/div[13]/div/div/div/div/div[2]/div[1]/h1/a','Mattress Daisy PU Foam Queen Bed (78*60*4) in Maroon Colour by HomeTown'
           .end()
    }
  }; 
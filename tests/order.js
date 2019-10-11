module.exports={
    '@tags': ['order'],
    // '@disabled': true,
    'Order flow '(browser) {
        browser
            .useXpath()
            //.url(browser.launchUrl)
            .url('https://www.hometown.in/chatni-vati-stainless-steel-katori-in-silver-colour-by-living-essence/sku/LI889KD25EZAHTFUR')
            //.url('https://stage.hometown.in/martin-fabric-and-leatherette-three-seater-sofa-in-brown--colour-by-hometown/sku/HO340SO79ADWHTFUR')
            .windowMaximize()
            .pause(1000)
            .moveTo(null,200,300)
            .assert.containsText('//*[@id="content"]/div/main/section/div[1]/div/div/section/div/div/div/div[2]/div[2]/div[1]/section/div/div/h1', "Chatni Vati Stainless steel Katori in Silver Colour by Living Essence")
            .click('//*[@id="content"]/div/main/section/div[1]/div/div/section/div/div/div/div[2]/div[4]/div[1]/div/div/button/span')
            .click('//*[@id="content"]/div/main/section/div[1]/div/div/section/div/div/div/div[2]/div[4]/div[1]/div/div/div/a/span')
            .pause(2000)
            .moveTo(null,200,300)
           // .assert.containsText('//*[@id="content"]/div/main/div[2]/div/div[1]/div/section/div/div/div[1]/div[2]/div[2]/div/p[2]','Delivered by 26th Sep')
            .pause(3000)
            .click('//*[@id="content"]/div/main/div[2]/div/div[1]/div/section/div/div/div[1]/div[2]/div[3]/div[1]/div/button[2]/img')
            .pause(3000)
            .click('//*[@id="content"]/div/main/div[2]/div/div[1]/div/section/div/div/div[2]/div[1]/div[3]/button')
            .pause(3000)
            .setValue('//*[@id="content"]/div/main/section/div/div/section[2]/div/div[1]/div[2]/form/div[1]/div[1]/div/div[1]/div/div/input','test')
            .setValue('//*[@id="content"]/div/main/section/div/div/section[2]/div/div[1]/div[2]/form/div[1]/div[1]/div/div[2]/div[1]/div/input','lalit@hometown.in')
            .setValue('//*[@id="content"]/div/main/section/div/div/section[2]/div/div[1]/div[2]/form/div[1]/div[1]/div/div[2]/div[2]/div/input','7776948392')
            .setValue('//*[@id="add1"]','Test')
            .setValue('//*[@id="pincodeId"]','401202')
            .pause(3000)
            .click('//*[@id="content"]/div/main/section/div/div/section[2]/div/div[1]/div[2]/form/div[2]/div/button')
            .pause(3000)
            .click('//*[@id="content"]/div/main/section/div/div/section[2]/div/div/div[1]/div[2]/div[1]/div[3]/div/label')
            .pause(1000)
            .click('//*[@id="content"]/div/main/section/div/div/section[2]/div/div/div[1]/div[2]/div[2]/div/div/div[3]/div/label/img')
            .pause(1000)
            .click('//*[@id="content"]/div/main/section/div/div/section[2]/div/div/div[2]/div[2]/div/button')
            .pause(3000)


            .end();
 }
}
import { browser } from 'protractor';
import fs = require('fs');
declare var module: NodeModule;
var myReporter = {
    specDone: function (result) {
        // if (result.failedExpectations.length > 0) {
            browser.getProcessedConfig().then(function (config) {
                browser.takeScreenshot().then(function (png) {
                    var dirPath = './reports/screenshots/';
                    if (!fs.existsSync('./reports')) {
                        fs.mkdirSync('./reports');
                        if (!fs.existsSync(dirPath))
                            fs.mkdirSync(dirPath);
                    }
                    // var fileName = (config.capabilities.browserName + '-' + result.fullName).replace(/[\/\\]/g, ' ').substring(0, 230);
                    var fileName = ('chrome-' + result.fullName).replace(/[\/\\]/g, ' ').substring(0, 230);
                    var stream = fs.createWriteStream(dirPath + fileName + '.png');
                    stream.write(new Buffer(png, 'base64'));
                    stream.end();
                }, function (error) {
                    console.log("failed to take screenshot");
                })
            })
        // }
    }
}
module.exports = myReporter;
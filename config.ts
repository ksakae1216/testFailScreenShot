import { ProtractorBrowser, Config } from 'protractor';
import myReporter = require('./jasmine_reporter');
export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'directConnect': true,
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['./specs/**/*.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    onPrepare: () => {
        let globals = require('protractor');
        jasmine.getEnv().addReporter(myReporter);
        let browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    }
}
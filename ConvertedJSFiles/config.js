"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myReporter = require("./jasmine_reporter");
exports.config = {
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
    onPrepare: function () {
        var globals = require('protractor');
        jasmine.getEnv().addReporter(myReporter);
        var browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    }
};

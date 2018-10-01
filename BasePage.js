var selenium = require('selenium-webdriver');

function getDriver(name='chrome') {
    var driver = new selenium.Builder().forBrowser(name).build();
    return driver;
};

module.exports = getDriver;
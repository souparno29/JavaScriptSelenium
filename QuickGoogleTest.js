var selenium = require('selenium-webdriver');
var driver = new selenium.Builder().forBrowser('chrome').build();

let page = driver.get('http://www.google.ca');
driver.manage().window().maximize();
var key = driver.findElement(selenium.By.name('q'));
key.sendKeys('testing selenium', selenium.Key.RETURN);
driver.close();
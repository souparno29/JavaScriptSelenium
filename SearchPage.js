// stores all the functions related to Search page.

const getDriver = require('./BasePage.js');
const getById = require('./PageLocators');
var selenium = require('selenium-webdriver');


driver = getDriver('firefox');
driver.get('http://automationpractice.com/');
driver.manage().window().maximize();

var searchBar = getById(driver, 'search_query_top');
searchBar.sendKeys('Shirt', selenium.Key.RETURN);

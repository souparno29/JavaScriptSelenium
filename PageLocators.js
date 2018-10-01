/* module to store all the findElement functions
   that are going to be used by multiple pages. */

var selenium = require('selenium-webdriver');

function getById(driver, idString) {
    let foundObject = driver.findElement(selenium.By.id(idString));
    return foundObject
}

module.exports = getById;
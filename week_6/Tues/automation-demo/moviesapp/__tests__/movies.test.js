const { By, Builder, Browser, until, Key } = require("selenium-webdriver");

let driver;

// Build a new driver for each test
beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

// Quit a driver after each test
afterEach(async () => {
  await driver.quit();
});

describe("Tests the Movies App", () => {
    test("can add a movie", async () => {
        //navigate to the web app at localhost:3000
        await driver.get('http://localhost:3000/')
        //find the input box and type in the name of the movie
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys("The Matrix");
        //find the add button and click
        await driver.findElement(By.css('button[type="submit"]')).click();
        //wait until the movie appears in the list
        const addedMovie = await driver.wait(until.elementLocated(By.css('#movies-list li label')), 1000)
        //check that the movie appears in the list
        expect(await addedMovie.getText()).toBe('The Matrix');
    })
});
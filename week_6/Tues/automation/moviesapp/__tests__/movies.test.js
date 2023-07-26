const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});


describe("testing movies site", () => {
    test("crossing off a movie", async () =>{
        //get movies site
        await driver.get('http://localhost:3000/')
        //select input field and send keys
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys("The Matrix");
        //find submit button
        await driver.findElement(By.css('button[type="submit"]')).click();
        //wait until the movie appears in the list
        const addedMovie = await driver.wait(until.elementLocated(By.css('#movies-list li label')), 1000)
        //check that movie appears in list
        expect(await addedMovie.getText()).toBe('The Matrix');
        //select checkbox for movie
        await driver.findElement(By.css('input[type="checkbox"]')).click()
        //see if target is checked
        const movieWatched = await driver.wait(until.elementLocated(By.css('#message')), 1000)
        expect(await movieWatched.getText()).toBe('Watched The Matrix');

    })
})

describe("delete movie", () => {
  test("remove a movie", async () => {
      // get movie site
      await driver.get('http://localhost:3000/')
      //select input field and send keys
      await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys("The Matrix");
      //find submit button
      await driver.findElement(By.css('button[type="submit"]')).click();
      //wait until the movie appears in the list
      const addedMovie = await driver.wait(until.elementLocated(By.css('#movies-list li label')), 1000)
      //check that movie appears in list
      expect(await addedMovie.getText()).toBe('The Matrix');
      // find remove button and click
      await driver.findElement(By.css('.delete-btn')).click()
      // see if movie is removed
      const movieDeleted = await driver.wait(until.elementLocated(By.css('#message')), 1000)
      expect(await movieDeleted.getText()).toBe('The Matrix deleted!');
  })
})

describe("uncheck the movie", ()=>{
  test("uncheck the movie", async()=>{
       //get movies site
       await driver.get('http://localhost:3000/')
       //select input field and send keys
       await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys("The Matrix");
       //find submit button
       await driver.findElement(By.css('button[type="submit"]')).click();
       //wait until the movie appears in the list
       const addedMovie = await driver.wait(until.elementLocated(By.css('#movies-list li label')), 1000)
       //check that movie appears in list
       expect(await addedMovie.getText()).toBe('The Matrix');
       //select checkbox for movie
       await driver.findElement(By.css('input[type="checkbox"]')).click()
       //see if target is checked
       const movieWatched = await driver.wait(until.elementLocated(By.css('#message')), 1000)
       expect(await movieWatched.getText()).toBe('Watched The Matrix');
       //select the checkbox and click
       await driver.findElement(By.css('input[type="checkbox"]')).click()
       //check the message
       const movieBack = await driver.wait(until.elementLocated(By.css('#message')), 1000)
       expect(await movieBack.getText()).toBe('Added back The Matrix');
  })
})
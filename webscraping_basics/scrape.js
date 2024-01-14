const puppeteer = require("puppeteer");

puppeteer.launch({ headless: true }).then(async (browser) => {
  const page = await browser.newPage();
  const wikipediaUrl = "https://en.wikipedia.org/wiki/Cheese";
  await page.goto(wikipediaUrl);
  await page.waitForSelector("#mw-content-text", { timeout: 3000 });

  await page.screenshot({ path: "test.png" });

  const results = await page.evaluate(() => {
    const articleContents = [];
    const mainContentEl = document.querySelector("#mw-content-text");
    const pTags = mainContentEl.querySelectorAll("p");
    pTags.forEach((el) => articleContents.push(el.innerText));

    const references = [];
    const referencesList = document.querySelector("ol.references");
    const referencesListItems = referencesList.querySelectorAll("li");
    referencesListItems.forEach((el) => {
      references.push(el.innerText);
    });
    return { references, articleContents };
  });

  console.log(results);
  await page.close();
  await browser.close();
});

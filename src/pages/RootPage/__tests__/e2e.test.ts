export {};
import Puppeteer from "puppeteer";

describe("test main", () => {
  let browser: any;
  let page: any;
  jest.setTimeout(12000);
  beforeAll(async () => {
    browser = await Puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });
  test("navigates to the about page", async () => {
    await page.goto("http://localhost:3000/");
    await page.waitForTimeout(1000);

    //open/close greeting modal
    await page
      .click("#header")
  });
});

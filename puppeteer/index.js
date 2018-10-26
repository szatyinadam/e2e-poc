const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 821 });
  await page.goto("https://github.com/");
  await page.waitForSelector(
    ".header-search > .position-relative > .js-site-search-form > .form-control > .form-control"
  );
  await page.type(
    ".header-search > .position-relative > .js-site-search-form > .form-control > .form-control",
    "szatyinadam"
  );
  await page.keyboard.press("Enter");
  await page.waitForSelector(
    "#js-pjax-container > .container-lg > .col-12 > .menu > .menu-item:nth-child(8)"
  );
  await page.click(
    "#js-pjax-container > .container-lg > .col-12 > .menu > .menu-item:nth-child(8)"
  );
  await page.waitForSelector(
    ".user-list-item > .d-flex > .user-list-info > a > em"
  );
  await page.click(".user-list-item > .d-flex > .user-list-info > a > em");
  await navigationPromise;
  await page.waitForSelector(
    ".pinned-repo-item:nth-child(2) > .pinned-repo-item-content > .d-block > .text-bold > .repo"
  );
  await page.click(
    ".pinned-repo-item:nth-child(2) > .pinned-repo-item-content > .d-block > .text-bold > .repo"
  );
  await navigationPromise;
  await browser.close();
})();

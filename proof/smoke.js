const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({headless:true});
  const page = await browser.newPage();
  const response = await page.goto('https://state-trace-animator.ichabod-crane.net/', {waitUntil:'networkidle'});
  if (response.status() !== 200) throw Error(`Expected 200, got ${response.status()}`);
  await page.getByRole('button', {name:'Build machine'}).click();
  await page.getByRole('button', {name:'Play trace'}).click();
  await page.locator('#trace li').nth(3).waitFor();
  const trace = await page.locator('#trace li').allTextContents();
  if (trace.length !== 4 || !trace[3].includes('invalid event')) throw Error(`Unexpected trace: ${JSON.stringify(trace)}`);
  console.log(JSON.stringify({status:response.status(), trace}, null, 2));
  await browser.close();
})();

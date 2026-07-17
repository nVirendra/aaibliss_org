const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });

  // International visitor (default US timezone/locale)
  {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1100 },
      timezoneId: 'America/New_York',
      locale: 'en-US',
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (err) => errors.push(String(err)));
    await page.goto('http://localhost:3001/#pricing', { waitUntil: 'networkidle' });
    await page.waitForSelector('#pricing');
    await page.locator('#pricing').scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'pricing_intl.png' });
    console.log('INTL errors:', errors);
    await context.close();
  }

  // Indian visitor
  {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1100 },
      timezoneId: 'Asia/Kolkata',
      locale: 'en-IN',
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (err) => errors.push(String(err)));
    await page.goto('http://localhost:3001/#pricing', { waitUntil: 'networkidle' });
    await page.waitForSelector('#pricing');
    await page.locator('#pricing').scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'pricing_india.png' });
    console.log('INDIA errors:', errors);
    await context.close();
  }

  await browser.close();
})();

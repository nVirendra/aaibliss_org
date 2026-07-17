const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });

  const url = 'http://localhost:3001/#services';

  // Desktop
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
    const errors = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(String(err)));
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
    await page.waitForSelector('text=How We Work');
    const section = await page.$('text=How We Work');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200); // allow reveal animations
    await page.screenshot({ path: 'desktop_process.png', fullPage: false });
    console.log('DESKTOP console errors:', errors);
    await page.close();
  }

  // Mobile
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    const errors = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(String(err)));
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
    await page.waitForSelector('text=How We Work');
    const section = await page.$('text=How We Work');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);
    await page.screenshot({ path: 'mobile_process.png', fullPage: false });
    console.log('MOBILE console errors:', errors);
    await page.close();
  }

  await browser.close();
})();

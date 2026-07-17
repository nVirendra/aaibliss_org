const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });

  const page = await browser.newPage({ viewport: { width: 1440, height: 4200 } });
  const errors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', (err) => errors.push(String(err)));
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.locator('text=Support & Maintenance').first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);

  const section = await page.locator('text=How We Work').first();
  const box = await section.boundingBox();
  await page.screenshot({
    path: 'desktop_process_full.png',
    clip: { x: 0, y: Math.max(box.y - 50, 0), width: 1440, height: 2600 },
  });
  console.log('errors:', errors);
  await browser.close();
})();

import { chromium } from 'playwright';

const PAGES = [
  { path: '/', name: 'home-mobile' },
  { path: '/designer-agent', name: 'da-mobile' },
  { path: '/reddit-agent', name: 'ra-mobile' },
];

const browser = await chromium.launch();
const context = await browser.newContext({ colorScheme: 'light', viewport: { width: 390, height: 844 } });

for (const pg of PAGES) {
  const page = await context.newPage();
  await page.goto(`http://localhost:5173${pg.path}`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => {
    const imgs = document.querySelectorAll('img');
    return Array.from(imgs).every(img => img.complete && img.naturalHeight > 0);
  }, { timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${pg.name}.png`, fullPage: true });
  await page.close();
  console.log(`✓ ${pg.name}`);
}

await browser.close();

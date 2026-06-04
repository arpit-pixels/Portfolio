import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/designer-agent', name: 'designer-agent' },
  { path: '/reddit-agent', name: 'reddit-agent' },
  { path: '/wsup-design', name: 'wsup-design' },
  { path: '/nowgg', name: 'nowgg' },
  { path: '/bluestacks', name: 'bluestacks' },
];

mkdirSync('mobile-audit', { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ colorScheme: 'light', viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

for (const pg of PAGES) {
  const page = await context.newPage();
  await page.goto(`http://localhost:5173${pg.path}`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => {
    const imgs = document.querySelectorAll('img');
    return Array.from(imgs).every(img => img.complete && img.naturalHeight > 0);
  }, { timeout: 8000 }).catch(() => {});
  // scroll through page to trigger IntersectionObserver reveals
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1200);
  // detect horizontal overflow
  const overflow = await page.evaluate(() => {
    const docW = document.documentElement.clientWidth;
    const bad = [];
    document.querySelectorAll('*').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > docW + 1 || r.left < -1)) {
        const cls = typeof el.className === 'string' ? el.className : '';
        bad.push(`${el.tagName.toLowerCase()}${cls ? '.' + cls.split(' ').join('.') : ''} → left:${Math.round(r.left)} right:${Math.round(r.right)} (vw:${docW})`);
      }
    });
    return { scrollW: document.documentElement.scrollWidth, clientW: docW, offenders: bad.slice(0, 25) };
  });
  if (overflow.scrollW > overflow.clientW) {
    console.log(`⚠ ${pg.name}: horizontal overflow ${overflow.scrollW}px vs ${overflow.clientW}px`);
    overflow.offenders.forEach(o => console.log(`   ${o}`));
  }
  await page.screenshot({ path: `mobile-audit/${pg.name}.png`, fullPage: true });
  await page.close();
  console.log(`✓ ${pg.name}`);
}

await browser.close();

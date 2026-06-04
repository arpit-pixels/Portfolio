import { chromium, devices } from 'playwright';

const iphone = devices['iPhone 14'];
const browser = await chromium.launch({ headless: false, args: ['--window-size=420,920', '--window-position=80,40'] });
const context = await browser.newContext({ ...iphone, colorScheme: 'light' });
const page = await context.newPage();
await page.goto('http://localhost:5173/');
console.log('Mobile browser open — close the window when done.');

browser.on('disconnected', () => process.exit(0));
await new Promise(() => {}); // keep alive until the window is closed

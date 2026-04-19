const puppeteer = require('puppeteer');
const fs = require('fs');

const targets = [
  { url: 'https://coffee-shop-rho-bay.vercel.app/', file: 'public/screenshots/coffee-shop-rho-bay.vercel.app.png' },
  { url: 'https://my-app-nu-seven-55.vercel.app/', file: 'public/screenshots/my-app-nu-seven-55.vercel.app.png' },
  { url: 'https://codetecsolutions.com/', file: 'public/screenshots/codetecsolutions.com.png' },
  { url: 'https://precissioneng.com/', file: 'public/screenshots/precissioneng.com.png' },
  { url: 'https://www.oceaniclogistics.com/', file: 'public/screenshots/www.oceaniclogistics.com.png' }
];

(async () => {
  const browser = await puppeteer.launch({ defaultViewport: { width: 1920, height: 1080 } });
  
  for (let t of targets) {
    try {
      console.log(`Navigating to ${t.url}...`);
      const page = await browser.newPage();
      await page.goto(t.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      // wait a bit for any slow transitions explicitly
      await new Promise(r => setTimeout(r, 6000));
      await page.screenshot({ path: t.file });
      await page.close();
      console.log(`Saved ${t.file}`);
    } catch(e) {
      console.error(`Failed ${t.url}:`, e.message);
    }
  }

  await browser.close();
  console.log("All done.");
})();

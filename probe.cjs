const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Probe coffee shop
  console.log("Navigating to coffee shop...");
  await page.goto('https://coffee-shop-rho-bay.vercel.app/', { waitUntil: 'networkidle2' });
  const html = await page.evaluate(() => document.body.innerHTML);
  const fs = require('fs');
  fs.writeFileSync('coffee_dom.html', html);
  
  // Probe precission eng
  console.log("Navigating to precissioneng...");
  await page.goto('https://precissioneng.com/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/screenshots/precissioneng.com.png' });
  
  await browser.close();
  console.log("Done");
})();

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    console.log("Navigating to coffee shop...");
    await page.goto('https://coffee-shop-rho-bay.vercel.app/', { waitUntil: 'networkidle2' });
    
    const buttons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('button, a')).map(el => el.innerText || el.textContent);
    });
    console.log("Buttons found:", buttons);
    
    // Check if there are input fields
    const inputs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('input')).map(el => el.type + ' ' + el.name);
    });
    console.log("Inputs found:", inputs);

    // Let's also print body text to see what it is
    const text = await page.evaluate(() => document.body.innerText.substring(0, 500));
    console.log("Body text start:", text);

  } catch(e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ defaultViewport: { width: 1920, height: 1080 } });
  try {
    const page = await browser.newPage();
    console.log("Loading coffee shop...");
    // Forcefully wait for complete network silence if possible or fallback
    await page.goto('https://coffee-shop-rho-bay.vercel.app/', { waitUntil: 'load', timeout: 60000 });
    
    console.log("Waiting 15 seconds to ensure SPA loading animation clears...");
    await new Promise(r => setTimeout(r, 15000));
    
    // Nuclear approach: Forcefully hide any remaining overlaying loader divs
    await page.evaluate(() => {
      document.querySelectorAll('div').forEach(div => {
        const style = window.getComputedStyle(div);
        if ((style.position === 'fixed' || style.position === 'absolute') && 
            parseInt(style.zIndex, 10) > 40 && 
            (style.width === '100vw' || style.width === '100%') && 
            (style.height === '100vh' || style.height === '100%')) {
          div.style.opacity = '0';
          div.style.display = 'none';
          div.style.visibility = 'hidden';
          div.style.pointerEvents = 'none';
        }
      });
    });

    console.log("Taking screenshot...");
    await page.screenshot({ path: 'public/screenshots/coffee-shop-rho-bay.vercel.app.png' });
    console.log("Success.");
  } catch(e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();

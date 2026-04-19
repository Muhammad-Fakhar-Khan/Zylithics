const fs = require('fs');
const path = require('path');

const urls = [
  'https://coffee-shop-rho-bay.vercel.app/',
  'https://my-app-nu-seven-55.vercel.app/',
  'https://codetecsolutions.com/',
  'https://precissioneng.com/',
  'https://www.oceaniclogistics.com/'
];

async function download() {
  const dir = path.join(__dirname, 'public', 'screenshots');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const url of urls) {
    const filename = url.replace('https:', '').replace(/\//g, '') + '.png';
    const apiUrl = `https://image.thum.io/get/width/1920/crop/1080/${url}`;
    console.log(`Downloading ${apiUrl}...`);
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(path.join(dir, filename), Buffer.from(buffer));
      console.log(`Saved ${filename}`);
    } catch(err) {
      console.error(`Error downloading ${url}:`, err);
    }
  }
}

download();

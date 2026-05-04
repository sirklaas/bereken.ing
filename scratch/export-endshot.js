const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// --- CONFIG ---
const URL = 'http://localhost:3008/endshot';
const VIEWPORT = { width: 1920, height: 1080 };
const ANIMATION_DURATION_MS = 5500; // Record 5.5s (covers full animation + settle)
const OUT_DIR = path.join(__dirname, '..', '..' , '..' , 'scratch');
const OUT_WEBM = path.join(OUT_DIR, 'bereken.ing_endshot.webm');
const OUT_MP4 = path.join(OUT_DIR, 'bereken.ing_endshot.mp4');

(async () => {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log('Launching headless Chromium for recording...');
  const browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: VIEWPORT,
    // Record a video of the full viewport
    recordVideo: {
      dir: OUT_DIR,
      size: VIEWPORT,
    },
  });

  const page = await context.newPage();

  console.log(`Navigating to ${URL} ...`);
  await page.goto(URL, { waitUntil: 'networkidle' });

  // Wait a tick for animations to start
  await page.waitForTimeout(200);

  console.log(`Recording ${ANIMATION_DURATION_MS}ms of animation...`);
  await page.waitForTimeout(ANIMATION_DURATION_MS);

  await context.close();
  await browser.close();

  // Playwright saves video with a random filename — rename it
  const files = fs.readdirSync(OUT_DIR);
  const webmFile = files.find(f => f.endsWith('.webm') && f.startsWith('video'));
  if (webmFile) {
    fs.renameSync(path.join(OUT_DIR, webmFile), OUT_WEBM);
    console.log(`Video saved: ${OUT_WEBM}`);
  }

  // Convert to MP4 using ffmpeg
  console.log('Converting to MP4 with ffmpeg...');
  const { execSync } = require('child_process');
  try {
    execSync(
      `ffmpeg -y -i "${OUT_WEBM}" -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -movflags +faststart "${OUT_MP4}"`,
      { stdio: 'inherit' }
    );
    console.log(`MP4 exported: ${OUT_MP4}`);
  } catch (e) {
    console.error('ffmpeg conversion failed. Make sure ffmpeg is installed.');
    console.log('WebM is still available at:', OUT_WEBM);
    process.exit(1);
  }
})();

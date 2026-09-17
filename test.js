const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const getFileUrl = (filename) => `file://${path.join(__dirname, filename)}`;

  try {
    console.log('Testing Index Navigation...');
    await page.goto(getFileUrl('index.html'));
    await page.waitForSelector('h1');

    // Test language selection (Index)
    await page.selectOption('select', 'en');
    let title = await page.textContent('h1');
    if (title !== 'Radioactivity & Nuclear Energy') {
        console.error(`Language switch failed on index. Expected English title, got: ${title}`);
    }

    // Chapter 1 Test
    console.log('Testing Chapter 1...');
    await page.goto(getFileUrl('chapter1.html'));
    await page.waitForSelector('#p-count');

    let pCountBefore = await page.textContent('#p-count');
    await page.click('button:has-text("+") >> nth=0'); // Add proton
    let pCountAfter = await page.textContent('#p-count');
    if (pCountAfter === pCountBefore) {
        console.error('Proton count did not increase');
    }

    await page.click('button.start-quiz-btn');
    await page.waitForSelector('.quiz-opt');
    await page.click('.quiz-opt >> nth=0');

    // Chapter 2 Test
    console.log('Testing Chapter 2...');
    await page.goto(getFileUrl('chapter2.html'));
    await page.waitForSelector('#btn-src-beta');
    await page.click('#btn-src-beta');
    await page.click('#btn-sh-aluminum');

    await page.click('button.start-quiz-btn');
    await page.waitForSelector('.quiz-opt');

    // Chapter 3 Test
    console.log('Testing Chapter 3...');
    await page.goto(getFileUrl('chapter3.html'));
    await page.waitForSelector('#btn-start-decay');
    await page.click('#btn-start-decay');
    await page.waitForTimeout(500); // let simulation run a bit
    await page.click('button:has-text("Reset")');

    // Chapter 4 Test
    console.log('Testing Chapter 4...');
    await page.goto(getFileUrl('chapter4.html'));
    // We switched the language to English in the beginning, so we need to match the English text or reset it.
    // The language is stored in localStorage by state.js, so it persists across page loads.
    // Let's find buttons by part of their text that matches English or use more robust selectors.
    await page.waitForSelector('button[data-i18n="rods_in"]');
    await page.dispatchEvent('button[data-i18n="rods_in"]', 'mousedown');
    await page.waitForTimeout(100);
    await page.dispatchEvent('button[data-i18n="rods_in"]', 'mouseup');

    // Chapter 5 Test
    console.log('Testing Chapter 5...');
    await page.goto(getFileUrl('chapter5.html'));
    await page.waitForSelector('button[data-i18n="npp"]');
    await page.click('button[data-i18n="npp"]');

    const infoDisplay = await page.evaluate(() => document.getElementById('info-panel').style.display);
    if (infoDisplay === 'none') {
        console.error('Info panel did not open');
    }

    await page.click('button.close-btn');

    console.log('Tests Complete.');
  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
})();

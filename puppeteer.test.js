const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const browserPath = browser.process().spawnfile;
    console.log(`Using Chromium at: ${browserPath}`);
    await browser.close();
})();

describe('Modal functionality', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false, // Запуск в режиме видимого браузера
            devtools: true,  // Открыть DevTools для отладки
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--window-size=1920,1080'] // Дополнительные аргументы
        });
        page = await browser.newPage();
        try {
            await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
            console.log('Page loaded successfully');
        } catch (error) {
            console.error('Error loading page:', error);
        }
    });

    afterAll(async () => {
        await browser.close();
    });

    test('should open and close modal on button clicks', async () => {
        await page.waitForSelector('#check-button');
        await page.click('#check-button');
        await page.waitForSelector('#modal', { visible: true });

        const modalStyle = await page.evaluate(() => {
            const modal = document.getElementById('modal');
            return getComputedStyle(modal).display;
        });
        expect(modalStyle).toBe('block');

        await page.click('#close-modal');
        const modalStyleAfterClose = await page.evaluate(() => {
            const modal = document.getElementById('modal');
            return getComputedStyle(modal).display;
        });
        expect(modalStyleAfterClose).toBe('none');
    });

    test('should highlight the correct icon on input', async () => {
        await page.waitForSelector('#card-number');
        await page.type('#card-number', '4532015112830366');
        await page.click('#check-button');
        await page.waitForSelector('.icon.highlighted');

        const highlightedIcon = await page.$eval('.icon.highlighted', el => el.id);
        expect(highlightedIcon).toBe('visaIcon'); // Замените на идентификатор ожидаемой иконки
    });
});

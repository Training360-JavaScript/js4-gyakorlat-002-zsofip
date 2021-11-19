
// Defining the timeout for the test
const timeout = process.env.SLOWMO ? 6000 : 2500;
const puppeteer = require('puppeteer');
const myServer = require('../server');

const getText = (page, elementHandle) => {
    return page.evaluate(el => el.innerText, elementHandle);
};

const delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    });
};

let page = null;
let browser = null;

// Go to the specified path and wait for the domcontent to load before running the tests
beforeAll(async () => {
    myServer.start('index.html', 9200);

    // For console outputs, add this param: {dumpio: true}
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:9200', { waitUntil: 'networkidle0' });
});

afterAll(async () => {
    await myServer.stop();
});

describe('1. feladat', () => {
    test('Kellene lennie egy startFetch függvénynek!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                startFetch: window.startFetch,
            };
        });

        expect(pageData.startFetch).toBeTruthy();
    });

    test('Kellene lennie egy serverData változónak!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                serverData: window.getServerData(),
            };
        });

        expect(typeof pageData.serverData).not.toEqual('undefined');
    });

    test('A startFetch meghívására a termékeknek be kellene kerülnie a serverData változóba!', async () => {
        await page.waitForSelector('#for-test');

        await page.evaluate(() => {
            window.startFetch('https://nettuts.hu/jms/js4-002/products?limit=5');
        });

        await delay(3000);

        const pageData = await page.evaluate(() => {
            return {
                serverData: window.getServerData(),
            };
        });

        expect(pageData.serverData.length).toEqual(5);
    });
    
});

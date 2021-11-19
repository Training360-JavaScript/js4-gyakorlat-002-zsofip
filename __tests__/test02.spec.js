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
    myServer.start('index.html');

    // For console outputs, add this param: {dumpio: true}
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:9000', { waitUntil: 'networkidle0' });
});

afterAll(async () => {
    await myServer.stop();
});

describe('2. feladat', () => {
    test('Kellene lennie egy getUsers függvénynek!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                getUsers: window.getUsers,
            };
        });

        expect(pageData.getUsers).toBeTruthy();
    });

    test('Kellene lennie egy userData változónak!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                userData: window.getUserData(),
            };
        });

        expect(typeof pageData.userData).not.toEqual('undefined');
    });

    test('A getUsers meghívására a felhasználóknak be kellene kerülnie a userData változóba!', async () => {
        await page.waitForSelector('#for-test');

        await page.evaluate(() => {
            window.getUsers('https://nettuts.hu/jms/js4-002/users?limit=2');
        });

        await delay(3000);

        const pageData = await page.evaluate(() => {
            return {
                userData: window.getUserData(),
            };
        });

        expect(pageData.userData.length).toEqual(2);
    });
    
});

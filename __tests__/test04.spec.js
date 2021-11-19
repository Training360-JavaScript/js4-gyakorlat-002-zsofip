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

describe('4. feladat', () => {
    test('Kellene lennie egy getCustomers függvénynek!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                getCustomers: window.getCustomers,
            };
        });

        expect(pageData.getCustomers).toBeTruthy();
    });

    test('Kellene lennie egy customerData változónak!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                customerData: window.getCustomerData(),
            };
        });

        expect(typeof pageData.customerData).not.toEqual('undefined');
    });

    test('A getCustomers meghívására a vásárlóknak be kellene kerülnie a customerData változóba!', async () => {
        await page.waitForSelector('#for-test');

        await page.evaluate(() => {
            window.getCustomers('https://nettuts.hu/jms/js4-002/users?limit=2');
        });

        await delay(3000);

        const pageData = await page.evaluate(() => {
            return {
                customerData: window.getCustomerData(),
            };
        });

        expect(pageData.customerData.length).toEqual(2);
    });
    
});

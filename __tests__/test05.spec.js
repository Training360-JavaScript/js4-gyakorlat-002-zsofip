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

describe('5. Feladat', () => {
    test('Kellene lennie egy getProducts függvénynek!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                getProducts: window.getProducts,
            };
        });

        expect(pageData.getProducts).toBeTruthy();
    });

    test('Kellene lennie egy productData változónak!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                productData: window.getProductData(),
            };
        });

        expect(typeof pageData.productData).not.toEqual('undefined');
    });

    test('A getProducts meghívására a termékeknek be kellene kerülnie a productData változóba!', async () => {
        await page.waitForSelector('#for-test');

        await page.evaluate(() => {
            window.getProducts('https://nettuts.hu/jms/js4-002/products?limit=2');
        });

        await delay(3000);

        const pageData = await page.evaluate(() => {
            return {
                productData: window.getProductData(),
            };
        });

        expect(pageData.productData.length).toEqual(2);
    });
    
    test('A productData elemeinek név szeint kellene rendezve lennie!', async () => {
        await page.waitForSelector('#for-test');

        await page.evaluate(() => {
            window.getProducts('https://nettuts.hu/jms/js4-002/products?limit=3');
        });

        await delay(3000);

        const pageData = await page.evaluate(() => {
            return {
                productData: window.getProductData(),
            };
        });

        expect(pageData.productData[0].id).toEqual(1);
        expect(pageData.productData[1].id).toEqual(3);
        expect(pageData.productData[2].id).toEqual(2);
    });
});

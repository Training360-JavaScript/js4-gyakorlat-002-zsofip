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

describe('3. feladat', () => {
    test('Kellene lennie egy getMovies függvénynek!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                getMovies: window.getMovies,
            };
        });

        expect(pageData.getMovies).toBeTruthy();
    });

    test('Kellene lennie egy movieData változónak!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                movieData: window.getMovieData(),
            };
        });

        expect(typeof pageData.movieData).not.toEqual('undefined');
    });

    test('A getMovies meghívására a filmeknek be kellene kerülnie a movieData változóba!', async () => {
        await page.waitForSelector('#for-test');

        await page.evaluate(() => {
            window.getMovies('https://nettuts.hu/jms/js4-002/movies?limit=2');
        });

        await delay(3000);

        const pageData = await page.evaluate(() => {
            return {
                movieData: window.getMovieData(),
            };
        });

        expect(pageData.movieData.length).toEqual(2);
    });
    
});

let serverData = null;
const getServerData = () => serverData;

/**
 * TODO: a startFetch függvény futtasson egy fetch kérést. 
 * Javítsd a hibás paraméteket a fetch függvény meghívásánál!
 * CSAK A 22. SORBAN DOLGOZZ!
 * 
 * PÉLDÁK: https://developer.mozilla.org/en-US/docs/Web/API/fetch#examples
 * 
 * LEÍRÁS: A függvény a kapott paraméterek alapján indít egy fetch kérést.
 * Miután a válasz megérkezett, az első függvényben, amelyet az első .then-ben 
 * átadunk, parse-oljuk a JSON-adatokat.
 * Majd a második .then-ben a parse-olt adatokkal felülírjuk a serverData 
 * változót.
 * Hiba esetén a .catch metódusban átadott függvény fut le, amely kiírja a 
 * megfelelő hibaüzenetet a console.log segítségével.
 * @param {string} method a kérés HTTP-metódusa, lehet GET|POST|DELETE|PUT|PATCH
 * @param {string} url a távoli erőforrás címe, ahonnan lekérjük az adatokat
 */
const startFetch = (method = 'GET', url = '') => {
    fetch('', {  })
        .then(response => response.json())
        .then(data => serverData = data)
        .catch(
            () => console.log(`Error: ${url} is not found!`),
        );
};

/**
 * TODO: exportáld ki helyesen a startFetch függvényt!
 * CSAK A 35. SORBAN DOLGOZZ!
 */
export {
    
    getServerData,
}

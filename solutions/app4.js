let customerData = null;
const getCustomerData = () => customerData;
/**
 * TODO: hozd létre a getCustomers függvényt! 
 * TODO: a getCustomers függvény futtasson egy fetch kérést!
 * TODO: majd a fetch kérés után parse-old a JSON-adatokat!
 * TODO: majd a parse-olt adatokkal írd felül a customerData változót!
 * TODO: hiba estén írd ki a konzolra: `Error: <url> is not found!`
 * (az <url> a kapott URL-cím legyen)!
 * 
 * PÉLDÁK: https://developer.mozilla.org/en-US/docs/Web/API/fetch#examples
 * 
 * LEÍRÁS: A függvény a kapott paraméterek alapján indít egy fetch kérést.
 * Miután a válasz megérkezett, az első függvényben, amelyet az első .then-ben 
 * átadunk, parse-oljuk a JSON-adatokat.
 * Majd a második .then-ben a parse-olt adatokkal felülírjuk a customerData 
 * változót.
 * Hiba esetén a .catch metódusban átadott függvény fut le, amely kiírja a 
 * megfelelő hibaüzenetet a console.log segítségével.
 * @param {string} url a távoli erőforrás címe, ahonnan lekérjük az adatokat
 */


/**
 * TODO: exportáld ki helyesen a getCustomers függvényt!
 */
export {
    
    getCustomerData,
}

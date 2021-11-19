let productData = [];
const getProductData = () => productData;

/**
 * Sorba rendezi a termékeket, és visszaadja a rendezett tömböt.
 * A rendezés alapja a name tulajdonság.
 * Példa a kapott tömbre: [{id: 1, name: 'Wine'}, {id: 2, name: 'Iron'}]
 * (A függvény fejlécét létrehoztuk)
 * @param {[{name: string}]} products termék objektumok tömbje
 * @returns {[{name: string}]} a name alapján rendezett tömb
 */
const sortProducts = (products = [{ name: '' }]) => {
    // itt dolgozz
};

/**
 * TODO: hozd létre a getProducts függvényt! 
 * 
 * TODO: a getProducts függvény futtasson egy fetch kérést!
 * 
 * TODO: majd a fetch kérés után parse-old a JSON-adatokat! 
 * 
 * TODO: majd a parse-olt és rendezett adatokkal írd felül a productData változót!
 * Ezt a műveletet a sortProducts függvény végezze, 
 * amely megkapja a tömböt és a name tulajdonság szerint sorba rendezi!
 * 
 * TODO: hiba estén írd ki a konzolra: `Error: <url> is not found!`
 * (az <url> a kapott URL-cím legyen)!
 * 
 * PÉLDÁK: https://developer.mozilla.org/en-US/docs/Web/API/fetch#examples
 * 
 * LEÍRÁS: A függvény a kapott paraméterek alapján indít egy fetch kérést.
 * Miután a válasz megérkezett, az első függvényben, amelyet az első .then-ben 
 * átadunk, parse-oljuk a JSON-adatokat.
 * Majd a második .then-ben a parse-olt adatokkal felülírjuk a productData 
 * változót.
 * Hiba esetén a .catch metódusban átadott függvény fut le, amely kiírja a 
 * megfelelő hibaüzenetet a console.log segítségével.
 * @param {string} url a távoli erőforrás címe, ahonnan lekérjük az adatokat
 */

/**
 * TODO: exportáld ki helyesen a getProducts függvényt!
 */
export {
    
    getProductData,
}

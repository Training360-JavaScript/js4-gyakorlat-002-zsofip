let userData = null;
const getUserData = () => userData;

/**
 * TODO: a getUsers függvény futtasson egy fetch kérést.
 * Javítsd a hibás vagy hiányzó paramétereket a fetch függvény meghívásánál 
 * és a kapott adatok parse-olásánál.
 * CSAK A 22-23. SOROKBAN DOLGOZZ!
 * 
 * PÉLDÁK: https://developer.mozilla.org/en-US/docs/Web/API/fetch#examples
 * 
 * LEÍRÁS: A függvény a kapott paraméterek alapján indít egy fetch kérést.
 * Miután a válasz megérkezett, az első függvényben, amelyet az első .then-ben 
 * átadunk, parse-oljuk a JSON-adatokat.
 * Majd a második .then-ben a parse-olt adatokkal felülírjuk a userData 
 * változót.
 * Hiba esetén a .catch metódusban átadott függvény fut le, amely kiírja a 
 * megfelelő hibaüzenetet a console.log segítségével.
 * @param {string} url a távoli erőforrás címe, ahonnan lekérjük az adatokat
 */
const getUsers = (url = '') => {
    fetch('')
        .then(() => {})
        .then(data => userData = data)
        .catch(
            () => console.log(`Error: ${url} is not found!`),
        );
};

/**
 * TODO: exportáld ki helyesen a getUsers függvényt!
 * CSAK A 35. SORBAN DOLGOZZ!
 */
export {
    
    getUserData,
}

let movieData = null;
const getMovieData = () => movieData;
/**
 * TODO: a getMovies függvény futtasson egy fetch kérést.
 * Javítsd a hibás vagy hiányzó paramétereket, függvényeket 
 * a fetch függvény meghívásánál és az utána következő két .then metódusban!
 * CSAK A 21-23. SOROKBAN DOLGOZZ!
 * 
 * PÉLDÁK: https://developer.mozilla.org/en-US/docs/Web/API/fetch#examples
 * 
 * LEÍRÁS: A függvény a kapott paraméterek alapján indít egy fetch kérést.
 * Miután a válasz megérkezett, az első függvényben, amelyet az első .then-ben 
 * átadunk, parse-oljuk a JSON-adatokat.
 * Majd a második .then-ben a parse-olt adatokkal felülírjuk a movieData 
 * változót.
 * Hiba esetén a .catch metódusban átadott függvény fut le, amely kiírja a 
 * megfelelő hibaüzenetet a console.log segítségével.
 * @param {string} url a távoli erőforrás címe, ahonnan lekérjük az adatokat
 */
const getMovies = (url = '') => {
    fetch('')
        .then(() => {})
        .then(() => {})
        .catch(
            () => console.log(`Error: ${url} is not found!`),
        );
};

/**
 * TODO: exportáld ki helyesen a getMovies függvényt!
 * CSAK A 34. SORBAN DOLGOZZ!
 */
export {
    
    getMovieData,
}

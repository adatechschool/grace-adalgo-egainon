/**
 * This function takes an array of words and convert it into a french sentence. Words are separated by
 * commas and the two last words are separated by "et".
 *
 * @param {string[]} array array of words
 * @returns {string}
 *
 * @example
 *      arrayToFrench(['un', 'deux', 'trois', 'soleil']); // returns "un, deux, trois et soleil"
 *      arrayToFrench(['noir', 'blanc']); // returns "noir et blanc"
 */
export const arrayToFrench = (array) => {
    if( array.length === 1){
        return array.toString();
    }else{
        if(array.length === 2){
            array.splice(array.length - 1, 0, "et");
            return array.join(" "); // join retourne en string, " " entre les é mots
        }else{
            array.splice(array.length - 1, 0, "et");
            return array.join(", ").replace(", et, ", " et ");// pour le dernier "et" et enlever la virgule
        }
    }
};
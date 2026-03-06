/**
 * This function takes a message as parameter and replaces all occurences
 * of "pain au chocolat" by "chocolatine".
 *
 * This would work with "pains au chocolat" and "chocolatines" as well and when
 * we see "un pain au chocolat" it should be replaced by "une chocolatine".
 *
 * @param {string} message The message in which the text should be replaced
 * @returns {string} an updated message with every "pain au chocolat" replaced by "chocolatine"
 */
export const chocolatine = (message) => {
    const messageModif = message
        .replace(/un pain au chocolat/g, "une chocolatine") // /un pain au chocolat/g regex (recherche globale)
        .replace(/pains au chocolats/g, "chocolatines")
        .replace(/pains au chocolat/g, "chocolatines")
        .replace(/pain au chocolat/g, "chocolatine");
    return messageModif
};
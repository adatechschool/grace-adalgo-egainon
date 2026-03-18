/**
 * This function tries to use french inclusive notation instead of masculine or feminine gender in sentences.
 * *This is a simplified version that focuses on simple pronouns replacement.*
 * The function should :
 * - replace il, elle by iel
 * - replace ils, elles by iels
 * - replace ceux, celle by celleux
 * Be carreful to properly handle edge cases from tests.
 * @param {string} text
 */
export const inclusify = (text) => {
  return (
    text
      // MAJUSCULES D'ABORD (formes longues puis courtes)
      .replace(/\bElles\b/g, "Iels") //b b: limites du mot recherché
      .replace(/\bIls\b/g, "Iels")
      .replace(/\bCelles\b/g, "Celleux")
      .replace(/\bCeux\b/g, "Celleux")
      .replace(/\bElle\b/g, "Iel")
      .replace(/\bIl\b/g, "Iel")
      // MINUSCULES ENSUITE (formes longues puis courtes)
      .replace(/\belles\b/g, "iels")
      .replace(/\bils\b/g, "iels")
      .replace(/\bcelles\b/g, "celleux")
      .replace(/\bceux\b/g, "celleux")
      .replace(/\belle\b/g, "iel")
      .replace(/\bil\b/g, "iel")
  );
};

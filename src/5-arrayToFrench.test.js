import { describe, expect, test } from "vitest";
import { arrayToFrench } from "./5-arrayToFrench";

// TODO: test arrayToFrench function with one, two and multiple words

describe("arrayToFrench", () => {
    test("one word", () => {
    expect(arrayToFrench(["salem"])).toBe("salem");
    });

    test('two words', () => {
    expect(arrayToFrench(['noir', 'blanc'])).toBe("noir et blanc");
    });

    test('multiples words', () => {
    expect(arrayToFrench(['un', 'deux', 'trois', 'soleil'])).toBe("un, deux, trois et soleil");
    });
})
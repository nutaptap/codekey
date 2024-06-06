import { describe, test, expect } from "vitest";
import { calculateWPM } from "../utils/calculateWPM";

describe("calculateWPM", () => {
  test("calculates WPM correctly for normal values", () => {
    const score = 100;
    const time = 60;
    const result = calculateWPM(score, time);
    expect(result).toBe(20);
  });

  test("returns 0 WPM when score is zero", () => {
    const score = 0;
    const time = 60;
    const result = calculateWPM(score, time);
    expect(result).toBe(0);
  });
});

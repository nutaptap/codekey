import { describe, test, expect } from "vitest";
import { calculateAccuracy } from "../utils/calculateAccuracy";

describe("calculateAccuracy", () => {
  test("calculates accuracy", () => {
    const score = 100;
    const mistakes = 10;
    const result = calculateAccuracy(score, mistakes);
    expect(result).toBe(90);
  });

  test("handles cases with zero score", () => {
    const score = 0;
    const mistakes = 0;
    const result = calculateAccuracy(score, mistakes);
    expect(result).toBeNaN();
  });
});

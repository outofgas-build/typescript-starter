import { describe, it, expect } from "vitest";
import { add } from "../dist/index.js";

describe("dist build", () => {
    it("works after build", () => {
        expect(add(2, 3)).toBe(5);
    });
});

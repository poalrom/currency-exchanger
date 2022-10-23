import { inputToNumber } from "./inputToNumber";

describe("inputToNumber", () => {
    it("should convert integer string to number", () => {
        const result = inputToNumber("100");

        expect(result).toBe(100);
    });

    it("should return 0 if nothing passed", () => {
        const result = inputToNumber();

        expect(result).toBe(0);
    });

    it("should convert float string with point to number", () => {
        const result = inputToNumber("100.1");

        expect(result).toBe(100.1);
    });

    it("should convert float string with comma to number", () => {
        const result = inputToNumber("100,1");

        expect(result).toBe(100.1);
    });

    it("should convert string with spaces", () => {
        const result = inputToNumber("100 100,1");

        expect(result).toBe(100100.1);
    });

    it("should return 0 if input is invalid", () => {
        const result = inputToNumber("100.100,1");

        expect(result).toBe(0);
    });
});

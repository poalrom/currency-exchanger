import currency from "currency.js";

import { calcRate, ICalcRateInput } from "./calcRate";

describe("calcRate", () => {
    it("should calc rate", () => {
        const input: ICalcRateInput = {
            paid: currency(100),
            received: currency(200),
        };

        const rate = calcRate(input);

        expect(rate.value).toBe(2);
    });

    it("should return 0, if paid is 0", () => {
        const input: ICalcRateInput = {
            paid: currency(0),
            received: currency(200),
        };

        const rate = calcRate(input);

        expect(rate.value).toBe(0);
    });

    it("should return 0, if received is 0", () => {
        const input: ICalcRateInput = {
            paid: currency(100),
            received: currency(0),
        };

        const rate = calcRate(input);

        expect(rate.value).toBe(0);
    });

    it("should return 0 if received is negative", () => {
        const input: ICalcRateInput = {
            paid: currency(-100),
            received: currency(200),
        };

        const rate = calcRate(input);

        expect(rate.value).toBe(0);
    });

    it("should return 0 if paid is negative", () => {
        const input: ICalcRateInput = {
            paid: currency(100),
            received: currency(-200),
        };

        const rate = calcRate(input);

        expect(rate.value).toBe(0);
    });

    it("should return 0 if paid is not set", () => {
        const input: ICalcRateInput = {
            received: currency(200),
        };

        const rate = calcRate(input);

        expect(rate.value).toBe(0);
    });

    it("should return 0 if received is not set", () => {
        const input: ICalcRateInput = {
            paid: currency(100),
        };

        const rate = calcRate(input);

        expect(rate.value).toBe(0);
    });
});

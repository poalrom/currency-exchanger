import currency from "currency.js";

import { calcReceived, ICalcReceivedInput } from "./calcReceived";

describe("calcReceived", () => {
    it("should calc received", () => {
        const input: ICalcReceivedInput = {
            paid: currency(100),
            rate: currency(2),
        };

        const result = calcReceived(input);

        expect(result.value).toBe(200);
    });

    it("should calc received including fee", () => {
        const input: ICalcReceivedInput = {
            paid: currency(100),
            rate: currency(2),
            fee: currency(100),
        };

        const result = calcReceived(input);

        expect(result.value).toBe(400);
    });

    it("should return 0 if paid is not set", () => {
        const input: ICalcReceivedInput = {
            rate: currency(2),
            fee: currency(100),
        };

        const result = calcReceived(input);

        expect(result.value).toBe(0);
    });

    it("should return 0 if rate is not set", () => {
        const input: ICalcReceivedInput = {
            paid: currency(100),
            fee: currency(100),
        };

        const result = calcReceived(input);

        expect(result.value).toBe(0);
    });

    it("should return 0 if paid is 0", () => {
        const input: ICalcReceivedInput = {
            paid: currency(0),
            rate: currency(2),
            fee: currency(100),
        };

        const result = calcReceived(input);

        expect(result.value).toBe(0);
    });

    it("should return 0 if rate is 0", () => {
        const input: ICalcReceivedInput = {
            paid: currency(100),
            rate: currency(0),
            fee: currency(100),
        };

        const result = calcReceived(input);

        expect(result.value).toBe(0);
    });

    it("should return 0 if paid is negative", () => {
        const input: ICalcReceivedInput = {
            paid: currency(-100),
            rate: currency(2),
            fee: currency(100),
        };

        const result = calcReceived(input);

        expect(result.value).toBe(0);
    });

    it("should return 0 if rate is negative", () => {
        const input: ICalcReceivedInput = {
            paid: currency(100),
            rate: currency(-2),
            fee: currency(100),
        };

        const result = calcReceived(input);

        expect(result.value).toBe(0);
    });

    it("should return 0 if fee is negative", () => {
        const input: ICalcReceivedInput = {
            paid: currency(100),
            rate: currency(2),
            fee: currency(-500),
        };

        const result = calcReceived(input);

        expect(result.value).toBe(0);
    });
});

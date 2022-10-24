import currency from "currency.js";

export interface ICalcRateInput {
    paid?: currency;
    received?: currency;
}

const zero = currency(0);

export function calcRate({
    paid = zero,
    received = zero,
}: ICalcRateInput): currency {
    if (paid.value <= 0 || received.value <= 0) {
        return zero;
    }

    return received.divide(paid);
}

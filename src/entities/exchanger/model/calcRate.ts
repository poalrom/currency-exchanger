import currency from "currency.js";

export interface ICalcRateInput {
    paid?: currency;
    received?: currency;
    fee?: currency;
}

const zero = currency(0);

export function calcRate({
    paid = zero,
    received = zero,
    fee = zero,
}: ICalcRateInput): currency {
    if (paid.value <= 0 || received.value <= 0 || fee.value < 0) {
        return zero;
    }

    return received.divide(paid.add(fee));
}

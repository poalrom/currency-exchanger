import currency from "currency.js";

export interface ICalcReceivedInput {
    paid?: currency;
    rate?: currency;
    fee?: currency;
}

const zero = currency(0);

export function calcReceived({
    paid = zero,
    rate = zero,
    fee = zero,
}: ICalcReceivedInput): currency {
    if (paid.value <= 0 || rate.value <= 0 || fee.value < 0) {
        return zero;
    }

    return paid.add(fee).multiply(rate);
}

import currency from "currency.js";

import { IExchangerData } from "../types/exchanger-data";

const zero = currency(0);
const one = currency(1);

export function calcTotalRate(rows: IExchangerData[]): currency {
    const paid = rows[0].received;
    const received = rows[rows.length - 1].received;

    let fee = currency(0);
    let cummulativeRate = currency(1);

    for (const row of rows.slice(0, -1)) {
        cummulativeRate = cummulativeRate.multiply(row.rate || one);
        fee = fee.add((row.fee || zero).multiply(cummulativeRate));
    }

    if (!paid || !received) {
        return zero;
    }

    return received.divide(paid.add(fee));
}

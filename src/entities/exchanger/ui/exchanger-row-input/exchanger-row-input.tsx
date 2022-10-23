import currency from "currency.js";
import { observer } from "mobx-react-lite";
import { FC } from "react";

import { CurrencyInput } from "../../../../shared/ui/currency-input";
import {
    ExchangeMode,
    IExchangerData,
    TOnChange,
} from "../../types/exchanger-data";

import { withModeToggle } from "./withToggleMode";

interface IExchangerRowInputProps {
    row: IExchangerData;
    label?: string;
    onChange: TOnChange;
}

type KeysMatching<T, V> = {
    [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];
type OnlyCurrencyKeys = KeysMatching<IExchangerData, currency | undefined>;

function getExchangerRowInput<T extends OnlyCurrencyKeys>(
    field: T,
    defaultLabel: string,
    placeholder: string
): FC<IExchangerRowInputProps> {
    return observer(({ row, onChange, label }) => {
        return (
            <CurrencyInput
                id={`${field}-${row.id}`}
                label={label ?? defaultLabel}
                initialValue={row[field]}
                placeholder={placeholder}
                onChange={(value) => onChange(row.id, field, value)}
            />
        );
    });
}

export const ReceivedInput = withModeToggle(
    ExchangeMode.received,
    getExchangerRowInput("received", "Received", "100500")
);
export const RateInput = withModeToggle(
    ExchangeMode.rate,
    getExchangerRowInput("rate", "Rate", "6.55")
);
export const FeeInput = getExchangerRowInput("fee", "Fee", "205");

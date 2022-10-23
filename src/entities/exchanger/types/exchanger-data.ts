import currency from "currency.js";

export enum ExchangeMode {
    rate = "rate",
    received = "received",
}

export const DEFAULT_EXCHANGE_MODE = ExchangeMode.received;

export interface IExchangerData {
    id: string;
    received?: currency;
    rate?: currency;
    mode: ExchangeMode;
    fee?: currency;
}

export type TOnAdd = () => void;
export type TOnChange = <T extends keyof IExchangerData>(
    id: string,
    field: T,
    value: IExchangerData[T]
) => void;
export type TOnDelete = (id: IExchangerData["id"]) => void;

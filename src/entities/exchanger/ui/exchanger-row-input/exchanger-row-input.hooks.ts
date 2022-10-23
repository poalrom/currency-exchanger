import {
    ExchangeMode,
    IExchangerData,
    TOnChange,
} from "../../types/exchanger-data";

export function useToggleMode(row: IExchangerData, onChange: TOnChange) {
    return () =>
        onChange(
            row.id,
            "mode",
            row.mode === ExchangeMode.rate
                ? ExchangeMode.received
                : ExchangeMode.rate
        );
}

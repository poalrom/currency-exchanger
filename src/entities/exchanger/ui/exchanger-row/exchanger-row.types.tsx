import {
    IExchangerData,
    TOnChange,
    TOnDelete,
} from "../../types/exchanger-data";

export interface IExchangerRowProps {
    row: IExchangerData;
    onChange: TOnChange;
    onDelete: TOnDelete;
}

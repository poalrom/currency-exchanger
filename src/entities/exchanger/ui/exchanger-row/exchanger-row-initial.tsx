import { observer } from "mobx-react-lite";
import { FC } from "react";

import {
    FeeInput,
    ReceivedInput,
} from "../exchanger-row-input/exchanger-row-input";

import { IExchangerRowProps } from "./exchanger-row.types";

import styles from "./exchanger-row.module.css";

export const InitialExchangerRow: FC<IExchangerRowProps> = observer(
    ({ row, onChange }) => {
        return (
            <div className={styles.exchangerInitialRow}>
                <ReceivedInput row={row} onChange={onChange} label="Paid" />
                <span className={styles.expression}>+</span>
                <FeeInput row={row} onChange={onChange} />
            </div>
        );
    }
);

InitialExchangerRow.displayName = "InitialExchangerRow";

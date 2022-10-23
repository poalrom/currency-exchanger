import { observer } from "mobx-react-lite";
import { FC } from "react";

import {
    RateInput,
    ReceivedInput,
} from "../exchanger-row-input/exchanger-row-input";

import { IExchangerRowProps } from "./exchanger-row.types";

import styles from "./exchanger-row.module.css";

export const FinalExchangerRow: FC<IExchangerRowProps> = observer(
    ({ row, onChange }) => {
        return (
            <div className={styles.exchangerFinalRow}>
                <ReceivedInput row={row} onChange={onChange} />
                <span className={styles.expressionOperator}>OR</span>
                <RateInput row={row} onChange={onChange} />
            </div>
        );
    }
);

FinalExchangerRow.displayName = "FinalExchangerRow";

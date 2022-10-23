import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { observer } from "mobx-react-lite";
import { FC } from "react";

import {
    FeeInput,
    RateInput,
    ReceivedInput,
} from "../exchanger-row-input/exchanger-row-input";

import { IExchangerRowProps } from "./exchanger-row.types";

import styles from "./exchanger-row.module.css";

export const ExchangerRow: FC<IExchangerRowProps> = observer(
    ({ row, onChange, onDelete }) => {
        const { id } = row;

        return (
            <div className={styles.exchangerRow}>
                <span className={`${styles.expression} ${styles.notCentered}`}>
                    (
                </span>
                <ReceivedInput row={row} onChange={onChange} />
                <span className={styles.expressionOperator}>OR</span>
                <RateInput row={row} onChange={onChange} />
                <span className={styles.expression}>) +</span>
                <FeeInput row={row} onChange={onChange} />
                <button
                    className={`is-outline is-primary ${styles.deleteButton}`}
                    onClick={() => onDelete(id)}
                >
                    <BsTrash />
                </button>
            </div>
        );
    }
);

ExchangerRow.displayName = "ExchangerRow";

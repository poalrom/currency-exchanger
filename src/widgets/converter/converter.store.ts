import currency from "currency.js";
import { action, computed, observable, reaction, IComputedValue } from "mobx";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { calcRate } from "../../entities/exchanger/model/calcRate";
import { calcReceived } from "../../entities/exchanger/model/calcReceived";
import {
    DEFAULT_EXCHANGE_MODE,
    ExchangeMode,
    IExchangerData,
    TOnAdd,
    TOnChange,
    TOnDelete,
} from "../../entities/exchanger/types/exchanger-data";

interface IStateRow extends IExchangerData {
    id: string;
    dispose: Array<() => void>;
}

function getNewRow(): IStateRow {
    return observable({
        id: nanoid(),
        mode: DEFAULT_EXCHANGE_MODE,
        dispose: [],
    });
}

interface IStore {
    total: IComputedValue<currency>;
    rows: IStateRow[];
    onAdd: TOnAdd;
    onChange: TOnChange;
    onDelete: TOnDelete;
}

const recalcRows = action((rows: IStateRow[], changedRow: IStateRow) => {
    const changedRowIndex = rows.findIndex((row) => row.id === changedRow.id);
    // First row haven't something to recalc
    const recalcStartRowIndex = changedRowIndex || 1;

    for (let i = recalcStartRowIndex; i < rows.length; i++) {
        const row = rows[i];
        const prevRow = rows[i - 1];
        let field: "rate" | "received";
        let value: currency;

        if (row.mode === ExchangeMode.rate) {
            field = "received";
            value = calcReceived({
                paid: prevRow.received,
                rate: row.rate,
                fee: prevRow.fee,
            });
        } else {
            field = "rate";
            value = calcRate({
                paid: prevRow.received,
                received: row.received,
                fee: prevRow.fee,
            });
        }

        if (row[field]?.value !== value.value) {
            row[field] = value;
        }
    }
});

function createReaction(rows: IStateRow[], row: IStateRow) {
    row.dispose.push(
        reaction(
            () => row.received?.value,
            () => row.mode === ExchangeMode.received && recalcRows(rows, row)
        )
    );

    row.dispose.push(
        reaction(
            () => row.rate?.value,
            () => row.mode === ExchangeMode.rate && recalcRows(rows, row)
        )
    );

    row.dispose.push(
        reaction(
            () => row.fee?.value,
            () => recalcRows(rows, row)
        )
    );
}

export function useConverterStore(): IStore {
    const [rows] = useState(() =>
        observable<IStateRow>([getNewRow(), getNewRow()])
    );
    const [total] = useState(() =>
        computed(() => {
            return calcRate({
                paid: rows[0].received,
                received: rows[rows.length - 1].received,
                fee: rows[0].fee,
            });
        })
    );

    useEffect(() => {
        rows.forEach((row) => createReaction(rows, row));

        // Create reaction only first time
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChange = action(
        <T extends keyof IExchangerData>(
            id: string,
            field: T,
            value: IExchangerData[T]
        ) => {
            const target = rows.find((row) => row.id === id);

            if (target) {
                // @ts-ignore
                target[field] = value;
            }
        }
    );

    const onAdd = action(() => {
        const newRow = getNewRow();

        createReaction(rows, newRow);
        rows.splice(-1, 0, newRow);
    });

    const onDelete = action((id: string) => {
        const removeIndex = rows.findIndex((row) => row.id === id);

        // Don't remove first and last rows
        if (removeIndex < 1 || removeIndex === rows.length - 1) {
            return;
        }

        const row = rows[removeIndex];

        row.dispose.forEach((fn) => fn());
        rows.splice(removeIndex, 1);
        recalcRows(rows, rows[removeIndex]);
    });

    return {
        total,
        rows,
        onChange,
        onAdd,
        onDelete,
    };
}

import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { observer } from "mobx-react-lite";

import { ExchangerRow } from "../../entities/exchanger/ui/exchanger-row/exchanger-row";
import { FinalExchangerRow } from "../../entities/exchanger/ui/exchanger-row/exchanger-row-final";
import { InitialExchangerRow } from "../../entities/exchanger/ui/exchanger-row/exchanger-row-initial";

import { useConverterStore } from "./converter.store";
import { ResultRate } from "./result-rate";

import styles from "./converter.module.css";

export const Converter = observer(() => {
    const { rows, onChange, onAdd, onDelete, total } = useConverterStore();
    const initialRow = rows[0];
    const finalRow = rows[rows.length - 1];
    const intermediateRows = rows.slice(1, -1);

    return (
        <fieldset className={styles.converter}>
            <legend>Define converter sequence</legend>
            <InitialExchangerRow
                key={initialRow.id}
                row={initialRow}
                onChange={onChange}
                onDelete={onDelete}
            />
            <p className="text-hr">Additional exchanges</p>
            <div className={styles.converterRows}>
                {intermediateRows.map((row) => (
                    <ExchangerRow
                        key={row.id}
                        row={row}
                        onChange={onChange}
                        onDelete={onDelete}
                    />
                ))}
                <button
                    className="is-outline is-primary fullwidth"
                    onClick={onAdd}
                >
                    <AiOutlinePlus />
                </button>
            </div>
            <p className="text-hr">Finally received money</p>
            <FinalExchangerRow
                key={finalRow.id}
                row={finalRow}
                onChange={onChange}
                onDelete={onDelete}
            />
            <ResultRate total={total} />
        </fieldset>
    );
});

Converter.displayName = "Converter";

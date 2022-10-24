import currency from "currency.js";
import { observer } from "mobx-react-lite";
import { ChangeEvent, FC, useEffect, useState } from "react";

import styles from "./currency-input.module.css";

interface ICurrencyInputProps {
    id: string;
    label?: string;
    initialValue?: currency;
    placeholder?: string;
    onChange: (value?: currency) => void;
}

export const CurrencyInput: FC<ICurrencyInputProps> = observer(
    ({ id, label, initialValue, onChange, placeholder }) => {
        const [value, setValue] = useState(
            initialValue ? initialValue.toString() : ""
        );

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
            if (e.target.value === "") {
                onChange(undefined);
            } else {
                onChange(currency(e.target.value, { precision: 6 }));
            }
        };

        useEffect(() => {
            const stringValue = initialValue?.value.toString();

            if (stringValue && stringValue !== "0") {
                setValue(stringValue);
            }
        }, [initialValue?.value]);

        return (
            <div>
                {label && <label htmlFor={id}>{label}</label>}
                <input
                    id={id}
                    className="fullwidth"
                    type="text"
                    inputMode="numeric"
                    placeholder={placeholder}
                    value={value}
                    pattern="[\d\s]*(\.\d+)?"
                    onChange={handleChange}
                />
                <span className={styles.error}>
                    Only numbers and one point can be used in this input
                </span>
            </div>
        );
    }
);

CurrencyInput.displayName = "CurrencyInput";

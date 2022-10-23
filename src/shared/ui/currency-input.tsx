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
            onChange(currency(e.target.value));
        };

        useEffect(() => {
            setValue(initialValue?.value.toString() || "");
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
                    pattern="[\d\s]*(\.\d{0,2})?"
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

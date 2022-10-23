import { observer } from "mobx-react-lite";
import { FC } from "react";

import {
    ExchangeMode,
    IExchangerData,
    TOnChange,
} from "../../types/exchanger-data";

import { useToggleMode } from "./exchanger-row-input.hooks";

import styles from "./exchanger-row-input.module.css";

interface IWithToggleModeProps {
    row: IExchangerData;
    onChange: TOnChange;
}

export function withModeToggle<T extends IWithToggleModeProps>(
    mode: ExchangeMode,
    Component: FC<T>
): FC<T> {
    return observer((props) => {
        const toggleMode = useToggleMode(props.row, props.onChange);

        return (
            <div
                className={mode === props.row.mode ? "" : styles.disabledMode}
                onClick={mode === props.row.mode ? undefined : toggleMode}
            >
                <Component {...props} />
            </div>
        );
    });
}

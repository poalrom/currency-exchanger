import currency from "currency.js";
import { IComputedValue } from "mobx";
import { observer } from "mobx-react-lite";
import { FC } from "react";

import styles from "./converter.module.css";

interface IResultRateProps {
    total: IComputedValue<currency>;
}

export const ResultRate: FC<IResultRateProps> = observer(({ total }) => {
    return (
        <div>
            <p className="text-hr">Total</p>
            <p className={styles.resultRate}>Rate: {total.get().toString()}</p>
        </div>
    );
});

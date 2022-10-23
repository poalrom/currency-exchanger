import { Converter } from "../../widgets/converter/converter";

import styles from "./converter-page.module.css";

export const ConverterPage = () => {
    return (
        <div className={styles.converterPage}>
            <Converter />
        </div>
    );
};

ConverterPage.displayName = "ConverterPage";

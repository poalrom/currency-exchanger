import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { GrTrash } from "@react-icons/all-files/gr/GrTrash";
import { nanoid } from "nanoid";
import { FC, useState } from "react";

import styles from "./elements-list.module.css";

interface IElementsListProps {
    Component: FC;
}

export const ElementsList: FC<IElementsListProps> = ({ Component }) => {
    const [elements, setElements] = useState(() => [nanoid()]);
    const onAdd = () => {
        setElements((state) => [...state, nanoid()]);
    };
    const onDelete = (id: string) => {
        setElements((state) => state.filter((el) => el !== id));
    };

    return (
        <div className={styles.elementsList}>
            {elements.map((id) => (
                <div key={id} className={styles.element}>
                    <Component />
                    {elements.length > 1 && (
                        <button
                            onClick={() => onDelete(id)}
                            className={styles.deleteButton}
                        >
                            <GrTrash />
                        </button>
                    )}
                </div>
            ))}
            <button
                className={`is-outline is-primary fullwidth ${styles.addButton}`}
                onClick={onAdd}
            >
                <AiOutlinePlus />
            </button>
        </div>
    );
};

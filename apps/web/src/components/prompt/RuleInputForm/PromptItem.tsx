import { TextArea } from "@promptify/ui";

import styles from "./PromptItem.module.scss";

import type { ReactNode } from "react";

type PromptItemProps = {
    index: number;
    text: string;
};

export default function PromptItem({ index, text }: PromptItemProps): ReactNode {
    return (
        <TextArea
            placeholder={`프롬프트 #${index + 1}`}
            value={text}
            className={styles.PromptItem__textarea}
        />
    );
}

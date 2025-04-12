import { TextArea } from "@promptify/ui";
import clsx from "clsx";

import { useRuleFormContext } from "../RuleFormContext";

import styles from "./PromptItem.module.scss";

import type { Prompt } from "@promptify/types";
import type { ReactNode } from "react";

type PromptItemProps = {
    index: number;
    prompt: Prompt;
};

export default function PromptItem({ index, prompt }: PromptItemProps): ReactNode {
    const { prompts, updatePrompt, saveToLocalStorage, removePrompt } = useRuleFormContext();

    const isRemovable = prompts.length > 1;

    return (
        <div className={styles.PromptItem__wrapper}>
            <TextArea
                rows={3}
                placeholder={`프롬프트 #${index + 1}`}
                value={prompt}
                onChange={(e) => updatePrompt(index, e.target.value)}
                onBlur={saveToLocalStorage}
                className={clsx(styles.PromptItem__textarea)}
            />
            {isRemovable && (
                <button
                    type="button"
                    onClick={() => removePrompt(index)}
                    className={styles.PromptItem__remove}
                    aria-label="프롬프트 삭제"
                >
                    ✕
                </button>
            )}
        </div>
    );
}

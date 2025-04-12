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
    const { updatePrompt, saveToLocalStorage } = useRuleFormContext();

    return (
        <TextArea
            rows={3}
            placeholder={`프롬프트 #${index + 1}`}
            value={prompt}
            onChange={(e) => updatePrompt(index, e.target.value)}
            onBlur={saveToLocalStorage}
            className={clsx(styles.PromptItem__textarea)}
        />
    );
}

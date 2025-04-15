import { isEqual, isNil } from "es-toolkit";
import { useState } from "react";
import { useStorageState } from "react-simplikit";

import type { Prompt, PromptList } from "@promptify/types";

const RULE_FORM_STORAGE_KEY = "draft:rule-form";

type RuleFormDraft = {
    ruleName: string;
    prompts: PromptList;
};

type RuleFormReturn = {
    ruleName: string;
    prompts: PromptList;
    updateRuleName: (name: string) => void;
    updatePrompt: (index: number, value: Prompt) => void;
    addPrompt: () => void;
    removePrompt: (index: number) => void;
    resetForm: () => void;
    restoreForm: () => void;
    hasBackup: boolean;
};

const EMPTY_FORM: RuleFormDraft = {
    ruleName: "",
    prompts: [""],
};

export function useRuleForm(): RuleFormReturn {
    const [formState, setFormState] = useStorageState<RuleFormDraft>(RULE_FORM_STORAGE_KEY, {
        defaultValue: EMPTY_FORM,
    });

    const [backup, setBackup] = useState<RuleFormDraft | null>(null);

    const updateRuleName = (name: string): void => {
        setFormState((prev: RuleFormDraft) => ({ ...prev, ruleName: name }));
    };

    const updatePrompt = (targetIndex: number, newPrompt: Prompt): void => {
        setFormState((prev: RuleFormDraft) => {
            const updatedPrompts = prev.prompts.map((prompt: Prompt, index: number) =>
                index === targetIndex ? newPrompt : prompt
            );
            return { ...prev, prompts: updatedPrompts };
        });
    };

    const addPrompt = (): void => {
        setFormState((prev: RuleFormDraft) => ({ ...prev, prompts: [...prev.prompts, ""] }));
    };

    const removePrompt = (targetIndex: number): void => {
        setFormState((prev: RuleFormDraft) => {
            const nextPrompts =
                prev.prompts.length <= 1
                    ? [""]
                    : prev.prompts.filter((_: Prompt, index: number) => index !== targetIndex);
            return { ...prev, prompts: nextPrompts };
        });
    };

    const resetForm = (): void => {
        setBackup(formState);
        setFormState(EMPTY_FORM);
    };

    const restoreForm = (): void => {
        if (backup) {
            setFormState(backup);
            setBackup(null);
        }
    };

    const hasBackup = !isNil(backup) && isEqual(formState, EMPTY_FORM);

    return {
        ruleName: formState.ruleName,
        prompts: formState.prompts,
        updateRuleName,
        updatePrompt,
        addPrompt,
        removePrompt,
        resetForm,
        restoreForm,
        hasBackup,
    };
}

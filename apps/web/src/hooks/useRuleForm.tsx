import { isEqual, isNil } from "es-toolkit";
import { useState, useEffect } from "react";
import { useStorageState, useDebounce } from "react-simplikit";

import type { Prompt, PromptList } from "@promptify/types";

const RULE_FORM_STORAGE_KEY = "draft:rule-form";
const DEBOUNCE_SAVE_DELAY_MS = 1000;

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
    const [storedFormState, setStoredFormState] = useStorageState<RuleFormDraft>(
        RULE_FORM_STORAGE_KEY,
        {
            defaultValue: EMPTY_FORM,
        }
    );

    const [localRuleName, setLocalRuleName] = useState<string>(
        () => storedFormState?.ruleName ?? EMPTY_FORM.ruleName
    );
    const [localPrompts, setLocalPrompts] = useState<PromptList>(
        () => storedFormState?.prompts ?? EMPTY_FORM.prompts
    );

    const debouncedSetStoredFormState = useDebounce(setStoredFormState, DEBOUNCE_SAVE_DELAY_MS);

    const getCurrentLocalDraft = (): RuleFormDraft => ({
        ruleName: localRuleName,
        prompts: localPrompts,
    });

    useEffect(() => {
        const isExternalChange =
            storedFormState && !isEqual(storedFormState, getCurrentLocalDraft());
        const isStorageCleared = !storedFormState && !isEqual(getCurrentLocalDraft(), EMPTY_FORM);

        if (isExternalChange) {
            setLocalRuleName(storedFormState.ruleName);
            setLocalPrompts(storedFormState.prompts);
        } else if (isStorageCleared) {
            setLocalRuleName(EMPTY_FORM.ruleName);
            setLocalPrompts(EMPTY_FORM.prompts);
        }
    }, [storedFormState]);

    const [backup, setBackup] = useState<RuleFormDraft | null>(null);

    const updateRuleName = (name: string): void => {
        setLocalRuleName(name);
        debouncedSetStoredFormState({ ruleName: name, prompts: localPrompts });
    };

    const updatePrompt = (targetIndex: number, newPrompt: Prompt): void => {
        const updatedPrompts = localPrompts.map((prompt, index) =>
            index === targetIndex ? newPrompt : prompt
        );
        setLocalPrompts(updatedPrompts);
        debouncedSetStoredFormState({ ruleName: localRuleName, prompts: updatedPrompts });
    };

    const addPrompt = (): void => {
        const nextPrompts = [...localPrompts, ""];
        setLocalPrompts(nextPrompts);
        debouncedSetStoredFormState({ ruleName: localRuleName, prompts: nextPrompts });
    };

    const removePrompt = (targetIndex: number): void => {
        const nextPrompts =
            localPrompts.length <= 1
                ? [""]
                : localPrompts.filter((_, index) => index !== targetIndex);
        setLocalPrompts(nextPrompts);
        debouncedSetStoredFormState({ ruleName: localRuleName, prompts: nextPrompts });
    };

    const resetForm = (): void => {
        debouncedSetStoredFormState.cancel();
        setBackup(getCurrentLocalDraft());
        setLocalRuleName(EMPTY_FORM.ruleName);
        setLocalPrompts(EMPTY_FORM.prompts);
        setStoredFormState(EMPTY_FORM);
    };

    const restoreForm = (): void => {
        if (backup) {
            debouncedSetStoredFormState.cancel();
            setLocalRuleName(backup.ruleName);
            setLocalPrompts(backup.prompts);
            setStoredFormState(backup);
            setBackup(null);
        }
    };

    const hasBackup = !isNil(backup) && isEqual(getCurrentLocalDraft(), EMPTY_FORM);

    return {
        ruleName: localRuleName,
        prompts: localPrompts,
        updateRuleName,
        updatePrompt,
        addPrompt,
        removePrompt,
        resetForm,
        restoreForm,
        hasBackup,
    };
}

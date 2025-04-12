import { debounce, isEqual, isNil, isString } from "es-toolkit";
import { every, isArray, isObject } from "es-toolkit/compat";
import { useRef, useState } from "react";

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
    saveToLocalStorage: () => void;
    hasBackup: boolean;
};

const EMPTY_FORM: RuleFormDraft = {
    ruleName: "",
    prompts: [""],
};

function isValidRuleFormDraft(value: unknown): value is RuleFormDraft {
    if (!isObject(value)) return false;

    const draft = value as Partial<Record<keyof RuleFormDraft, unknown>>;

    return isString(draft.ruleName) && isArray(draft.prompts) && draft.prompts.every(isString);
}

function loadInitialFormState(): RuleFormDraft {
    try {
        const raw = localStorage.getItem(RULE_FORM_STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        return isValidRuleFormDraft(parsed) ? parsed : EMPTY_FORM;
    } catch {
        return EMPTY_FORM;
    }
}

export function useRuleForm(): RuleFormReturn {
    const [ruleName, setRuleName] = useState(() => loadInitialFormState().ruleName);
    const [prompts, setPrompts] = useState(() => loadInitialFormState().prompts);
    const [backup, setBackup] = useState<RuleFormDraft | null>(null);

    const debouncedSaveRef = useRef(
        debounce((draft: RuleFormDraft) => {
            localStorage.setItem(RULE_FORM_STORAGE_KEY, JSON.stringify(draft));
        }, DEBOUNCE_SAVE_DELAY_MS)
    );

    const saveToLocalStorageDraft = (draft: RuleFormDraft, flush = false): void => {
        debouncedSaveRef.current(draft);
        if (flush) debouncedSaveRef.current.flush();
    };

    const updateFormStateAndSave = (draft: RuleFormDraft): void => {
        setRuleName(draft.ruleName);
        setPrompts(draft.prompts);
        saveToLocalStorageDraft(draft);
    };

    const updateRuleName = (name: string): void => {
        setRuleName(name);
        saveToLocalStorageDraft({ ruleName: name, prompts });
    };

    const updatePrompt = (targetIndex: number, newPrompt: Prompt): void => {
        setPrompts((prev) => {
            const updatedPrompts = prev.map((prompt, index) =>
                index === targetIndex ? newPrompt : prompt
            );
            saveToLocalStorageDraft({ ruleName, prompts: updatedPrompts });
            return updatedPrompts;
        });
    };

    const addPrompt = (): void => {
        setPrompts((prev) => {
            const next = [...prev, ""];
            saveToLocalStorageDraft({ ruleName, prompts: next });
            return next;
        });
    };

    const removePrompt = (targetIndex: number): void => {
        setPrompts((prev) => {
            const next = prev.length <= 1 ? [""] : prev.filter((_, index) => index !== targetIndex);
            saveToLocalStorageDraft({ ruleName, prompts: next });
            return next;
        });
    };

    const resetForm = (): void => {
        setBackup({ ruleName, prompts });
        updateFormStateAndSave(EMPTY_FORM);
        saveToLocalStorageDraft(EMPTY_FORM, true);
    };

    const restoreForm = (): void => {
        if (backup) {
            updateFormStateAndSave(backup);
            saveToLocalStorageDraft(backup, true);
            setBackup(null);
        }
    };

    every;

    const hasBackup = !isNil(backup) && isEqual({ ruleName, prompts }, EMPTY_FORM);

    return {
        ruleName,
        prompts,
        updateRuleName,
        updatePrompt,
        addPrompt,
        removePrompt,
        resetForm,
        restoreForm,
        saveToLocalStorage: () => saveToLocalStorageDraft({ ruleName, prompts }, true),
        hasBackup,
    };
}

import { debounce, isNil, isString } from "es-toolkit";
import { isArray } from "es-toolkit/compat";
import { useRef, useState } from "react";

import type { Prompt, PromptList } from "@promptify/types";

const LOCAL_STORAGE_KEY = "draft:rule-form";

type RuleFormDraft = {
    ruleName: string;
    prompts: PromptList;
};

type RuleFormReturn = {
    ruleName: string;
    prompts: PromptList;
    updateRuleName: (nextName: string) => void;
    updatePrompt: (targetIndex: number, newPrompt: Prompt) => void;
    addPrompt: () => void;
    saveToLocalStorage: () => void;
};

function loadFromLocalStorage(): RuleFormDraft {
    try {
        if (typeof window === "undefined") return { ruleName: "", prompts: [""] };

        const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        if (isNil(stored)) return { ruleName: "", prompts: [""] };

        const parsed = JSON.parse(stored);
        const isValid =
            typeof parsed === "object" &&
            isString(parsed.ruleName) &&
            isArray(parsed.prompts) &&
            parsed.prompts.every((prompt: unknown) => isString(prompt));

        return isValid ? parsed : { ruleName: "", prompts: [""] };
    } catch {
        return { ruleName: "", prompts: [""] };
    }
}

export function useRuleForm(): RuleFormReturn {
    const [ruleName, setRuleName] = useState(() => loadFromLocalStorage().ruleName);
    const [prompts, setPrompts] = useState(() => loadFromLocalStorage().prompts);

    const debouncedSaveRef = useRef(
        debounce((next: RuleFormDraft): void => {
            if (typeof window !== "undefined") {
                window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
            }
        }, 1000)
    );

    const saveToLocalStorage = (): void => {
        debouncedSaveRef.current({ ruleName, prompts });
        debouncedSaveRef.current.flush();
    };

    const updateRuleName = (nextName: string): void => {
        setRuleName(nextName);
        debouncedSaveRef.current({ ruleName: nextName, prompts });
    };

    const updatePrompt = (targetIndex: number, newPrompt: Prompt): void => {
        setPrompts((prev) => {
            const next = prev.map((current, idx) => (idx === targetIndex ? newPrompt : current));
            debouncedSaveRef.current({ ruleName, prompts: next });
            return next;
        });
    };

    const addPrompt = (): void => {
        setPrompts((prev) => {
            const next = [...prev, ""];
            debouncedSaveRef.current({ ruleName, prompts: next });
            return next;
        });
    };

    return {
        ruleName,
        prompts,
        updateRuleName,
        updatePrompt,
        addPrompt,
        saveToLocalStorage,
    };
}

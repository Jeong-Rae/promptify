import { createContext, useContext } from "react";

import { useRuleForm } from "../hooks/useRuleForm";

import type { Prompt, PromptList } from "@promptify/types";
import type { JSX, ReactNode } from "react";

type RuleFormContextType = {
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

const RuleFormContext = createContext<RuleFormContextType | null>(null);

export const useRuleFormContext = (): RuleFormContextType => {
    const ctx = useContext(RuleFormContext);
    if (!ctx) throw new Error("RuleFormContext is not available");
    return ctx;
};

export function RuleFormProvider({ children }: { children: ReactNode }): JSX.Element {
    const state = useRuleForm();
    return <RuleFormContext.Provider value={state}>{children}</RuleFormContext.Provider>;
}

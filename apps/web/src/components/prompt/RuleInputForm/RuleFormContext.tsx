import { createContext, useContext } from "react";

import { useRuleForm } from "./useRuleForm";

import type { Prompt, PromptList } from "@promptify/types";
import type { ReactNode } from "react";

type RuleFormContextType = {
    ruleName: string;
    prompts: PromptList;
    updateRuleName: (name: string) => void;
    updatePrompt: (index: number, value: Prompt) => void;
    addPrompt: () => void;
    saveToLocalStorage: () => void;
};

const RuleFormContext = createContext<RuleFormContextType | null>(null);

export const useRuleFormContext = (): RuleFormContextType => {
    const ctx = useContext(RuleFormContext);
    if (!ctx) throw new Error("RuleFormContext is not available");
    return ctx;
};

export function RuleFormProvider({ children }: { children: ReactNode }): ReactNode {
    const state = useRuleForm();
    return <RuleFormContext.Provider value={state}>{children}</RuleFormContext.Provider>;
}

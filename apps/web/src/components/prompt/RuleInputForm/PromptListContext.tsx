import { createContext, useContext } from "react";

import { usePromptList } from "./usePromptList";

import type { Prompt, PromptList } from "@promptify/types";
import type { ReactNode } from "react";

type PromptListContextType = {
    prompts: PromptList;
    addPrompt: () => void;
    updatePrompt: (index: number, value: Prompt) => void;
};

const PromptListContext = createContext<PromptListContextType | null>(null);

export const usePromptListContext = (): PromptListContextType => {
    const context = useContext(PromptListContext);
    if (!context) throw new Error("PromptListContext is not available");
    return context;
};

export function PromptListProvider({ children }: { children: ReactNode }) {
    const value = usePromptList();
    return <PromptListContext.Provider value={value}>{children}</PromptListContext.Provider>;
}

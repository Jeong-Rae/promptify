import { useState } from "react";

import type { PromptList } from "@promptify/types";

export function usePromptList(initial: PromptList = [""]) {
    const [prompts, setPrompts] = useState<PromptList>(initial);

    const addPrompt = () => {
        setPrompts((prev) => [...prev, ""]);
    };

    const updatePrompt = (index: number, value: string) => {
        setPrompts((prev) => prev.map((prompt, idx) => (idx === index ? value : prompt)));
    };

    return {
        prompts,
        addPrompt,
        updatePrompt,
    };
}

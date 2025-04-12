import { Flex } from "@promptify/ui";

import PromptItem from "./PromptItem";
import { useRuleFormContext } from "./RuleFormContext";

import type { ReactNode } from "react";

export default function PromptListView(): ReactNode {
    const { prompts } = useRuleFormContext();

    return (
        <Flex direction="column" gap="2" m="0">
            {prompts.map((prompt, idx) => (
                <PromptItem key={idx} index={idx} prompt={prompt} />
            ))}
        </Flex>
    );
}

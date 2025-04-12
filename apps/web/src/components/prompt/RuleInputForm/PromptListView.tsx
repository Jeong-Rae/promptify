import { Flex } from "@promptify/ui";

import PromptItem from "./PromptItem";
import { usePromptListContext } from "./PromptListContext";

import type { ReactNode } from "react";

export default function PromptListView(): ReactNode {
    const { prompts } = usePromptListContext();

    return (
        <Flex direction="column" gap="2" m="0">
            {prompts.map((prompt, idx) => (
                <PromptItem key={idx} index={idx} prompt={prompt} />
            ))}
        </Flex>
    );
}

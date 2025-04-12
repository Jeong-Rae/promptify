import { Flex } from "@promptify/ui";

import PromptItem from "./PromptItem";

import type { ReactNode } from "react";

type PromptListProps = {
    prompts: string[];
};

export default function PromptList({ prompts }: PromptListProps): ReactNode {
    return (
        <Flex direction="column" gap="2" m="0">
            {prompts.map((text, idx) => (
                <PromptItem key={idx} index={idx} text={text} />
            ))}
        </Flex>
    );
}
